import React from 'react';

class TodolistHeader extends React.Component {

    newTaskTitleRef = React.createRef();

    onAddTaskClick = () => {
        let newText = this.newTaskTitleRef.current.value;
        this.newTaskTitleRef.current.value = ""; //очистили инпут (присвоили пустую строку)
        this.props.addTask(newText);
    };

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">To do list</h3>
                <div className="todoList-newTaskForm">
                    <input
                        type="text"
                        placeholder="New task name"
                        ref={this.newTaskTitleRef}
                    />
                    <button onClick={this.onAddTaskClick}>Add</button>
                </div>
            </div>

        );
    }
}

export default TodolistHeader;

