import React from 'react';

class TodoListFooter extends React.Component {
    render = () => {
        let classForAll = this.props.filterValue === "All" ? "filter-active" : "";
        let classForCompleted = this.props.filterValue === "Completed" ? "filter-active" : "";
        let classForActive = this.props.filterValue === "Active" ? "filter-active" : "";

        return (
            <div className="todoList-footer">
                <button className={classForAll}>Все</button>
                <button className={classForCompleted}>Выполненные</button>
                <button className={classForActive}>Активные</button>
            </div>
        );
    }
}

export default TodoListFooter;

