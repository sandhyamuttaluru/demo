import React, { useState, useEffect } from 'react'
import Delete from './Delete'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import "./Show.css"
const Show = () => {
 const { id } = useParams()
  const [todo,setTodo] =useState([])


  useEffect(() => {
    fetch(`/api/${id}`).then(response => response.json())
    .then(data => setTodo(data))
  }, [id])

  
  return (
    <div className='position-absolute top-50 start-50 translate-middle' id='main'>
    {todo.length > 0 && todo.map(data => <div className='show-content'>{data.content}</div>)}
     <hr></hr>
     <Delete id={id} />
   
    <div className='back'>
    <Link to='/' style={{textDecoration: 'none',color:'whitesmoke'}}>Back to <img className='img-icon' src="https://cdn-icons-png.flaticon.com/512/1299/1299961.png" alt="Home" /></Link></div>
    </div>
  )
}

export default Show