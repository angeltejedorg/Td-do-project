import React from "react";

import "../styles/Todo.css"


const Todo = ({ title, status, id, handleStatus }) => {

    return (
        <div className="singleTitle" >
            <h4>Task #{id}</h4>
            <p>{title}</p>
            <button 
            className={status ? "button-true" : "button-false"}
            onClick={() => handleStatus(id)}
            >

                {status ? "Completed" : "Uncompleted"}
            
            </button>
        </div>
    );
  };
  
  export default Todo;