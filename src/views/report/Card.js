import React from 'react';

import { Link } from 'react-router-dom'

export const Card =({listOfTodos} )=>{

  
    return(
        <>
                        <div className="container mt-5 w-50">

        {listOfTodos.map((todo) => {
            return(
                <ul key={todo.id} className="list-group mt-4">
            
                <Link style={{textDecoration: 'none',fontWeight:'300'}} to={`${todo.id}`}><li className="list-group-item">{todo.content}</li></Link>
                
                </ul>
            )
        })}
</div>
        </>
    )
}