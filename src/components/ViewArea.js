import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default function ViewArea(props) {
   
    return (
        
        <div className="note">
           <h1>{props.todo.title}</h1> 
            <p>{props.todo.content}</p>
            <button  onClick={()=>props.del(props.todo.id)}><DeleteIcon/></button>
            
        </div>
     
    )
}
