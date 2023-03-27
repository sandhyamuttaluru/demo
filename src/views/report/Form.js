import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ userInput, onFormChange, onFormSubmit }) => {

    const handleChange=(e)=>{
        onFormChange(e.target.value);
    }

    
  const handleSubmit = (event)=>{
    event.preventDefault()
    onFormSubmit()

  }
  return (
    <>
                <div className="container mt-5 w-50">
    <form onSubmit={handleSubmit}>
    <h1><center>ToDo App Crud Application</center></h1>
    <div className="input-button">
    <input className="form-control" type='text' required value={userInput} onChange={handleChange}></input>
<br></br>
   <center> <button type="submit" className="btn btn-success">Add Task</button></center>
    </div>
    
    </form>
    </div>
    </>
  )
}

export default Form