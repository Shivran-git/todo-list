import { useState } from "react";
import TodoStateButtons from "./TodoStateButtons";
import { useCallback } from "react";
import { memo } from "react";
import TodoMaker from "../TodoMaker/TodoMaker";
import './TodoStates.css'

const MemoStateButtons = memo(({allSetter, completeSetter, pendingSetter})=>(
    <TodoStateButtons 
    allSetter={allSetter}
     completeSetter={completeSetter} 
     pendingSetter={pendingSetter}/>
))

function TodoStates(){
         const [isPending, setPending] = useState(false);
         const [isCompleted, setCompleted] = useState(false);
         const [isAll, setAll] = useState(true);

     console.log(isPending, isAll, isCompleted);
        const allSetter = useCallback(()=>{
            setAll(true);
            setPending(false);
            setCompleted(false);
         }, [])
        const pendingSetter = useCallback(()=>{
            setPending(true);
            setAll(false);
            setCompleted(false);
            
         }, [])
          const completeSetter = useCallback(()=>{
            setCompleted(true);
            setAll(false);
            setPending(false);
         }, [])

         return(
            <>
            <MemoStateButtons 
           allSetter={allSetter}
           completeSetter={completeSetter} 
           pendingSetter={pendingSetter}
            />
            <TodoMaker 
            isAll = {isAll}
            isCompleted = {isCompleted}
            isPending = {isPending}
            />
            </>
         )
}

export default TodoStates ;