import React from 'react';

export const Todo = ({ user, onDelete, onUpdate }) => {
    const handleUpdate = () => {
        const name = prompt('Введите новое имя:', user.name);
        const type = prompt('Выберите фильтр:', user.type);
        if (name && type) {
            onUpdate({ ...user, name, type });
        }
    };

    return (
        <div className="todo-item">
            <h3>{user.name}</h3>
            <p>Тип: {user.type}</p>
            <div className="btn-block">
                <button onClick={handleUpdate} className="change">Изменить</button>
                <button onClick={() => onDelete(user.id)} className="delete">Удалить</button>
            </div>
        </div>
    );
};