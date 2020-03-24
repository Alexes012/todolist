import React from 'react';

class TodoListTask extends React.Component {
    onIsDoneChanged =(e) => {
        this.props.changeStatus(this.props.tasks, e.currentTarget.checked)
    };
    render = () => {
        return (
            <div className="todoList-task">
                <input
                    type="checkbox"
                    checked={this.props.tasks.isDone}
                    onChange={this.onIsDoneChanged}
                />
                <span>{this.props.tasks.title}:{this.props.tasks.priority}</span>
            </div>
        );
    }
}

export default TodoListTask;

