import React from 'react';

function Profile() {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <h2>Профиль пользователя</h2>
            <p>Добро пожаловать, {user?.username}!</p>
            <p>Ваша роль: {user?.role === 'admin' ? 'Администратор' : 'Пользователь'}</p>
        </div>
    );
}

export default Profile;