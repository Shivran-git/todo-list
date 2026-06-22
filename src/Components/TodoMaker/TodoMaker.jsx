import { useState } from "react";
import todoStore from "../../Store/todoStore";
import TodoRenderer from "./TodoRenderer";


function TodoMaker({isAll, isCompleted, isPending}){
   
   const {AllTodos} = todoStore();   
   let i = 0 ;  
 
   let arr = [] ;
    if (isAll) {
    arr = [...AllTodos];
    arr = arr.map((todo, index)=>{
        i++;
        return (
            <TodoRenderer todo={todo} index={i} key={todo.id} />
        )
    })
  }
  if(isPending){
    arr = AllTodos.filter((todo)=> !todo.completed).map((todo)=>{
        i++;
        return(
            <TodoRenderer todo={todo} index={i} key={todo.id} />
        )
    })
  }

    if(isCompleted){
    arr = AllTodos.filter((todo)=> todo.completed).map((todo)=>{
        i++;
        return(
     <TodoRenderer todo={todo} index={i} key={todo.id} />

    )
    })
  }

    return(
        <>
      {arr}
      {arr.length === 0 && <div className="noTodo">NO TODO TO DISPLAY</div>}
        </>
    )
}

export default TodoMaker ;