import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active === true);
  const done = props.tasks.filter(task => task.active === false);

  done.sort((a, b) => {
    return b.finishDate - a.finishDate;
  });

  active.sort((a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
  });

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia : ({activeTasks.length})</h2>
        {activeTasks.length > 0 ? activeTasks : <h2>Nie masz nic do roboty</h2>}
      </div>

      <hr />

      <div className="done">
        <h3>Zadania zrobione : ({doneTasks.length})</h3>
        {done.length > 5 && (
          <span style={{ fontSize: 10 }}>
            Wyświetlonych jest tylko 5 elementów
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
