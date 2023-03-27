import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import Form from "./Form";
import 'bootstrap/dist/css/bootstrap.min.css';

const Report = () => {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");

  useEffect(() => {
    fetch("/api")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => setTodo(data));
  }, []);

  const handleFormChange = (inputValue) => {
    setAddTodo(inputValue);
  };

  const handleFormSubmit = () => {
    fetch("/api/create", {
      method: "POST",
      body: JSON.stringify({
        content: addTodo
      }),
      headers:{
        "Content-type": "application/json;  charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message => 
       setAddTodo(''),
       getLatestTodos())
  };


  const getLatestTodos=()=>{
    fetch('/api').then(response =>{
      if(response.ok){
        return response.json()
      }
    }).then(data => setTodo(data))
  }
 
  return (
   <> 
      <Form userInput={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
      <Card listOfTodos={todo} />
      
    </>
  );
};

export default Report;
