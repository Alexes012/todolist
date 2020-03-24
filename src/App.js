import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListFooter from "./TodoListFooter";
import TodoListTasks from "./TodoListTasks";


class App extends React.Component {

    state = {
        tasks: [
            {title: "JS", isDone: true, priority: "low"},
            {title: "HTML", isDone: false, priority: "heigh"},
            {title: "REACT", isDone: true, priority: "low"},
            {title: "SaSS", isDone: false, priority: "low"},
            {title: "REDUX", isDone: true, priority: "low"}
        ],
        filterValue: "Active"
    };

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: "low"
        };

        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        });
    };

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        })
};

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t !== task) {
                return t;
            } else {
                return {...t, isDone: isDone}
            }
        });
        this.setState({
            tasks: newTasks
        });
    };


    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t =>{
                        if(this.state.filterValue === "All"){
                            return true;
                        }
                        if(this.state.filterValue === "Completed"){
                            return t.isDone === true;
                        }

                        if(this.state.filterValue === "Active"){
                            return t.isDone === false;
                        }
                    })}/>
                    <TodoListFooter
                        filterValue={this.state.filterValue}
                        changeFilter={this.changeFilter}
                    />
                </div>
            </div>
        );
    }
}

export default App;

