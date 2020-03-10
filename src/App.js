import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";

class App extends React.Component {
    tasks = [
        {title: "JS", isDone: true, priority: "low"},
        {title: "HTML", isDone: false, priority: "low"},
        {title: "REACT", isDone: true, priority: "low"},
        {title: "SaSS", isDone: false, priority: "low"},
        {title: "REDUX", isDone: true, priority: "low"}
    ];
    filterValue = "All";
    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader/>
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

