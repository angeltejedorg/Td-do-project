import react, { useCallback } from "react";
import React, { useEffect, useState } from "react";

import Header from "./components/Header"
import Todo from "./components/Todo"
import Loader from "./components/Loader"

// Styles
import "./App.css"


function App() {

  const [toDoList, setToDoList] = useState();
  const [updatedArray, setUpdatedArray] = useState([]);
  const [arrayData, setArrayData] = useState([]);

  const fetchAllData = async() => {
    try {
      const response = await fetch (
          "https://jsonplaceholder.typicode.com/todos"
          );
      const result = await response.json();
      const resultToDoList = result.slice(0,20);
      // console.log(resultToDoList);
      setToDoList(resultToDoList);
      setArrayData(resultToDoList);
      setUpdatedArray(resultToDoList);

      // setAllCountries(result);
      // setLoading(false);
  } catch (er) {
      console.log(er);
  }
  }

  useEffect( () => {
    fetchAllData();
  }, []);

  const handleStatus = (id) => {
    setToDoList(toDoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
    setArrayData(toDoList);
    console.log(arrayData)
     };
  
  const handleTask = (option) => {
    switch (option) {
      case 1:
        setToDoList(arrayData.filter(todo => todo.completed == true));
        break;
      case 2:
        setToDoList(arrayData.filter(todo => todo.completed == false));
        break;
      case 0:
        setToDoList(arrayData);
        break;
      default:
        setToDoList(arrayData);
    }
  }


  return (
    <div>
      <Header
        handleTask={handleTask}
      />
      {
        toDoList  ? 
        (
        <div className="infoContainer">
        {toDoList.map(singleToDo => (
        <Todo 
        key={singleToDo.id} 
        title={singleToDo.title} 
        status={singleToDo.completed} 
        id={singleToDo.id}
        handleStatus={handleStatus}
        />
        ))}
      </div>
        ) : <Loader/>
      }
      
      
    </div>
  );
}

export default App;
