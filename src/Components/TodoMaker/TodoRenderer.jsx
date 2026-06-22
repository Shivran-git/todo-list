import { useEffect } from "react";
import todoStore from "../../Store/todoStore";
import { useState } from "react";
import Editor from "./Editor";
import todoStyle from "./TodoStyling";


function TodoRenderer({todo, index}){
    const {toggleComplete, onDelete, todoEditor} = todoStore();
     const [edit, setEdit] = useState(false);
     let x = "";
     
             function onComplete(){
                 toggleComplete(todo.id)
                 
             }

             function EditHandler(){
             setEdit(false);
             // and send the x to that todo so
             if(x !== "")  todoEditor(x,todo.id);
               
             }

             function handleEditChange(e){
                x = e.target.value ;
             }
             

             function onDeleter(){
                 onDelete(todo.id);
             }
    
      return(
        <>
        <div className="todo">

             <span className= {`${todoStyle(todo)}  todoText`} > {index}.  {todo.todo} </span>

             <div>
                {!todo.completed && <button onClick={onComplete} className="btn">Complete</button> }
             <button onClick={()=> setEdit(true)}  className="btn">Edit</button>
             
             <button onClick={onDeleter} className="btn">Delete</button>
             </div>

        </div>
        
        {edit &&< Editor close={EditHandler} handleChange = {handleEditChange}/>}
         
        </>
       
      )
    
}

export default TodoRenderer ;