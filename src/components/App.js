import React, { Component } from "react";

import "./App.css";
import "./AddTask";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 4;
  state = {
    tasks: [
      {
        id: 0,
        text: "posprzątać mieszkanie",
        date: "2020-05-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "wyprowadzić psa",
        date: "2020-04-20",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "zrobić zakupy",
        date: "2020-03-18",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "poleżec przed telewizorem",
        date: "2020-06-03",
        important: true,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks: tasks
    });
  };
  changeTaskStatus = id => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks: tasks
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));

    return true;
  };

  render() {
    return (
      <div className="app">
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
