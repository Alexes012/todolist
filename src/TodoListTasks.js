import React from 'react';
import TodoListTask from "./TodoListTask";

class TodoListTasks extends React.Component {
    render = () => {
        let tasksElement = this.props.tasks.map(tasks => <TodoListTask title={tasks.title}
                                                                       isDone={tasks.isDone}
                                                                       priority={tasks.priority}/>);

        return (
            <div className="todoList-tasks">
                {tasksElement}
            </div>
        );
    }
}

export default TodoListTasks;

