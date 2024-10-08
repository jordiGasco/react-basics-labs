import React from 'react';

const Task = (props) => {

    const getPriorityStyle = () => {
        const priority = props.priority;
    
        if (priority === "Low") {
          return { backgroundColor: "green", color: "white" };
        } else if (priority === "Medium") {
          return { backgroundColor: "orange", color: "white" };
        } else if (priority === "High") {
          return { backgroundColor: "red", color: "white" };
        } else {
          return { backgroundColor: "gray", color: "white" }; 
        }
      };

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={getPriorityStyle()} >{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )

}
export default Task;