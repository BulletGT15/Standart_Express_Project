import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogMain.scss';

function BlogMain() {
    const [posts, setPosts] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAdminModal, setShowAdminModal] = useState(false);
    const [newPost, setNewPost] = useState({
        image_url: '',
        publish_date: '',
        rating: '',
        title: '',
        description: '',
        read_more_url: ''
    });
    const [editingPost, setEditingPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user?.role === 'admin') {
            setIsAdmin(true);
        }
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/blog/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Ошибка загрузки статей:', error);
        }
    };

    const handleAddPost = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:5000/api/blog/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(editingPost)
            });

            if (!response.ok) throw new Error('Ошибка добавления статьи');

            setShowAdminModal(false);
            setEditingPost(null);
            fetchPosts();
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Не удалось добавить статью');
        }
    };

    const handleUpdatePost = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5000/api/blog/posts/${editingPost.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(editingPost)
            });

            if (!response.ok) throw new Error('Ошибка обновления статьи');

            setEditingPost(null);
            setShowAdminModal(false);
            fetchPosts();
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Не удалось обновить статью');
        }
    };

    const handleDeletePost = async (id) => {
        if (!window.confirm('Вы уверены, что хотите удалить эту статью?')) return;

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:5000/api/blog/posts/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) throw new Error('Ошибка удаления статьи');

            fetchPosts();
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Не удалось удалить статью');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsAdmin(false);
        setShowAdminModal(false);
    };

    const handleReadMore = (url) => {
        if (url) {
            if (/^https?:\/\//i.test(url)) {
                window.open(url, '_blank');
            } else {
                navigate(url);
            }
        }
    };

    return (
        <section className='BlogMain'>
            {isAdmin && (
                <button 
                    className="admin-toggle-btn"
                    onClick={() => setShowAdminModal(true)}
                >
                    <p>АП</p>
                </button>
            )}

            {showAdminModal && (
                <div className="admin-modal">
                    <div className="admin-modal-content">
                        <div className="admin-modal-header">
                            <h3>Панель администратора</h3>
                            <button 
                                className="close-btn"
                                onClick={() => {
                                    setShowAdminModal(false);
                                    setEditingPost(null);
                                }}
                            >
                                &times;
                            </button>
                        </div>

                        <div className="admin-modal-body">
                            <button 
                                className="logout-btn"
                                onClick={handleLogout}
                            >
                                Выйти
                            </button>

                            <div className="edit-form">
                                <h4>{editingPost?.id ? 'Редактировать статью' : 'Добавить статью'}</h4>
                                
                                <div className="form-group">
                                    <label>Дата публикации</label>
                                    <input
                                        type="text"
                                        placeholder="Например, 01.03.2023"
                                        value={editingPost?.publish_date || ''}
                                        onChange={(e) => setEditingPost({...editingPost, publish_date: e.target.value})}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Рейтинг</label>
                                    <input
                                        type="text"
                                        placeholder="Например, 4,8/5"
                                        value={editingPost?.rating || ''}
                                        onChange={(e) => setEditingPost({...editingPost, rating: e.target.value})}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Заголовок</label>
                                    <input
                                        type="text"
                                        placeholder="Заголовок статьи"
                                        value={editingPost?.title || ''}
                                        onChange={(e) => setEditingPost({...editingPost, title: e.target.value})}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Описание</label>
                                    <textarea
                                        placeholder="Текст статьи"
                                        value={editingPost?.description || ''}
                                        onChange={(e) => setEditingPost({...editingPost, description: e.target.value})}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>Ссылка "Читать далее"</label>
                                    <input
                                        type="text"
                                        placeholder="URL для кнопки 'Читать далее'"
                                        value={editingPost?.read_more_url || ''}
                                        onChange={(e) => setEditingPost({...editingPost, read_more_url: e.target.value})}
                                    />
                                </div>
                                
                                <div className="form-actions">
                                    <button 
                                        className="save-btn"
                                        onClick={editingPost?.id ? handleUpdatePost : handleAddPost}
                                    >
                                        {editingPost?.id ? 'Обновить' : 'Добавить'}
                                    </button>
                                    <button 
                                        className="cancel-btn"
                                        onClick={() => {
                                            setEditingPost(null);
                                            setShowAdminModal(false);
                                        }}
                                    >
                                        Отмена
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div>
                <p>Блог</p>
                <div className="posts-container">
                    {posts.map(post => (
                        <div key={post.id} className='BlockNews'>
                            <img src={post.image_url || "src/pages/Blog/components/BlogMain/images/work.png"} alt={post.title}/>
                            <p>{post.publish_date}</p>
                            <p><img src="src/pages/Blog/components/BlogMain/images/Star.png"/> {post.rating}</p>
                            <p>{post.title}</p>
                            <p>{post.description}</p>
                            <button onClick={() => handleReadMore(post.read_more_url)}>
                                Читать далее
                            </button>
                            
                            {isAdmin && (
                                <div className="admin-actions">
                                    <button 
                                        className="edit-btn"
                                        onClick={() => {
                                            setEditingPost(post);
                                            setShowAdminModal(true);
                                        }}
                                    >
                                        Редактировать
                                    </button>
                                    <button 
                                        className="delete-btn"
                                        onClick={() => handleDeletePost(post.id)}
                                    >
                                        Удалить
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BlogMain;