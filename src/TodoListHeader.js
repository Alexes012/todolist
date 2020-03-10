import React from 'react';

class TodolistHeader extends React.Component {
    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">Что нужно сделать</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="Название задания"/>
                    <button>Добавить</button>
                </div>
            </div>

        );
    }
}

export default TodolistHeader;

