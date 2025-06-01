Адаптация сделана по ширине: 1440, 1024, 768, 425, 375 и 320.

Бекэнд проекта сделан на postgreSQL

    Данные БД в server.js \/
    user: postgres
    host: localhost
    database: postgres
    password: 1234
    port: 5432

Функцианирущие компоненты с backend это: Calculator.jsx, Feedback.jsx, Rustam.jsx, Auth.jsx, BlogMain.jsx (В Blog.jsx).

В странице профиль есть регистрация и логин, если есть роль админа, то на старице Новостей появиться кнопка "АП" для добавления объектов.

Код для базы данных:

CREATE TABLE calculations (
    id SERIAL PRIMARY KEY,
    workers INTEGER NOT NULL,
    date TIMESTAMP NOT NULL,
    hours INTEGER NOT NULL,
    extras VARCHAR(50),
    work_type VARCHAR(50) NOT NULL,
    vehicle VARCHAR(50) NOT NULL,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    phone VARCHAR(20) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source VARCHAR(50) -- Для отслеживания откуда пришла заявка (из какого компонента)
);

-- Таблица пользователей
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(10) NOT NULL CHECK (role IN ('user', 'admin')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица статей блога
CREATE TABLE blog_posts (
    id SERIAL PRIMARY KEY,
    image_url VARCHAR(255),
    publish_date VARCHAR(20) NOT NULL,
    rating VARCHAR(10),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Вставка тестового администратора (пароль: admin123)
INSERT INTO users (username, password, role) 
VALUES ('admin', '$2b$10$7xnY5HNj6I8XG5BwrvTf.uYvD5l9Lz7VW1eOq1UJk3wJd6X1zYQmC', 'admin');

-- Вставка тестовых статей
INSERT INTO blog_posts (image_url, publish_date, rating, title, description)
VALUES 
('images/work.png', '01.03.2023', '4,8/5', 'Как перевозить холодильник?', 'Холодильник является крупногабаритной бытовой техникой...'),
('images/work.png', '15.03.2023', '4,5/5', 'Правила упаковки хрупких предметов', 'При переезде важно правильно упаковать хрупкие предметы...');