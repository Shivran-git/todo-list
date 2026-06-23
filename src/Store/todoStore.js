import {create} from 'zustand';
import {persist} from 'zustand/middleware'

const todoStore = create(persist((set) => ({
    todo : "",
    AllTodos : [],
    // here setTodo is used for Pendingtodos
    
    setTodo : (text)=>{
        set((state)=>{
            return{
                ...state,
                AllTodos: [...state.AllTodos, { todo : text, id: Date.now(), completed : false} ],
              //  Pendingtodos : [...state.Pendingtodos, newTodo]
            }
        })

    
    },

    toggleComplete : (id)=>{
        set((state)=>{
            return{
                AllTodos : state.AllTodos.map((todo)=>{
               if(todo.id === id){
                 return {
               ...todo,
             completed : !todo.completed
             
                            } ;
                       }
               return todo ;
                })
            }
        })
    },

    onDelete : (id)=>{
        set((state)=>{
            return{
                AllTodos : state.AllTodos.filter((todo)=> id !== todo.id)
            }
        })
    }, 

    todoEditor : (x, id)=>{
        set((state)=>{
            return{
                AllTodos : state.AllTodos.map((todo)=>{
                    if(todo.id === id){
                        return{
                            ...todo,
                            todo : x
                        }
                    }
                    return todo ;
                })
            }
        })
    }


   

})));




export default todoStore ;