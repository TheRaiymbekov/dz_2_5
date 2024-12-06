import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask, updateUser, setFilter } from '../redux/action';
import { Todo } from './Todo';

export const TodoList = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('Обычный');
    const users = useSelector((state) => state.users);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const filteredUsers = users.filter((user) =>
        filter === 'ALL' || user.type === filter
    );

    const handleAdd = () => {
        if (name && type) {
            const newUser = { id: Date.now(), name, type };
            dispatch(addTask(newUser));
            setName('');
            setType('Обычный');
        }
    };

    return (
        <div className="todo">

            <h1>TodoList</h1>
            <div className="todo-list">
                <input
                    className="todo-input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Имя пользователя"
                />
                <select className="todo-select" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Обычный">Обычный</option>
                    <option value="Пользователь">Пользователь</option>
                    <option value="Бизнес">Бизнес</option>
                    <option value="Инвестиции">Инвестиции</option>
                </select>
            </div>

            <button onClick={handleAdd} className="add">Добавить</button>

            <div className="filter-block">
                <label htmlFor="filter">Фильтр:</label>
                <select className="filter-select"
                        id="filter"
                        value={filter}
                        onChange={(e) => dispatch(setFilter(e.target.value))}
                >
                    <option value="ALL">Все</option>
                    <option value="Обычный">Обычный</option>
                    <option value="Пользователь">Пользователь</option>
                    <option value="Бизнес">Бизнес</option>
                    <option value="Инвестиции">Инвестиции</option>
                </select>
            </div>

            <div className="block">
                {filteredUsers.map((user) => (
                    <Todo
                        key={user.id}
                        user={user}
                        onDelete={(id) => dispatch(removeTask(id))}
                        onUpdate={(updatedUser) => dispatch(updateUser(updatedUser))}
                    />
                ))}
            </div>
        </div>
    );
};