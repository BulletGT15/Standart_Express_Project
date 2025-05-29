const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '1234',
    port: 5432,
});

const JWT_SECRET = 'your_jwt_secret_key';

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Требуется аутентификация' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Неверный токен' });
    }
};

// Регистрация пользователя
app.post('/api/register', async (req, res) => {
    try {
        const { username, password, role = 'user' } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ error: 'Имя пользователя и пароль обязательны' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const query = `
            INSERT INTO users (username, password, role)
            VALUES ($1, $2, $3)
            RETURNING id, username, role;
        `;

        const result = await pool.query(query, [username, hashedPassword, role]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        if (error.code === '23505') {
            res.status(400).json({ error: 'Имя пользователя уже занято' });
        } else {
            console.error('Ошибка регистрации:', error);
            res.status(500).json({ error: 'Ошибка сервера' });
        }
    }
});

// Вход пользователя
app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        const userQuery = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (userQuery.rows.length === 0) {
            return res.status(401).json({ error: 'Неверные учетные данные' });
        }

        const user = userQuery.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Неверные учетные данные' });
        }

        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ 
            token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role
            }
        });
    } catch (error) {
        console.error('Ошибка входа:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Получение всех статей блога
app.get('api/blog/posts', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blog_posts ORDER BY created_at DESC');
        res.json(result.rows);
    } catch (error) {
        console.error('Ошибка получения статей:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Добавление новой статьи (только для админа)
app.post('/api/blog/posts', authenticate, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Доступ запрещен' });
    }

    try {
        const { image_url, publish_date, rating, title, description } = req.body;
        
        const query = `
            INSERT INTO blog_posts (image_url, publish_date, rating, title, description)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;

        const result = await pool.query(query, [image_url, publish_date, rating, title, description]);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Ошибка добавления статьи:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Обновление статьи (только для админа)
app.put('/api/blog/posts/:id', authenticate, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Доступ запрещен' });
    }

    try {
        const { id } = req.params;
        const { image_url, publish_date, rating, title, description } = req.body;
        
        const query = `
            UPDATE blog_posts 
            SET 
                image_url = $1,
                publish_date = $2,
                rating = $3,
                title = $4,
                description = $5,
                updated_at = CURRENT_TIMESTAMP
            WHERE id = $6
            RETURNING *;
        `;

        const result = await pool.query(query, [image_url, publish_date, rating, title, description, id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Статья не найдена' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Ошибка обновления статьи:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

// Удаление статьи (только для админа)
app.delete('/api/blog/posts/:id', authenticate, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Доступ запрещен' });
    }

    try {
        const { id } = req.params;
        const result = await pool.query('DELETE FROM blog_posts WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Статья не найдена' });
        }
        res.json({ message: 'Статья удалена' });
    } catch (error) {
        console.error('Ошибка удаления статьи:', error);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});