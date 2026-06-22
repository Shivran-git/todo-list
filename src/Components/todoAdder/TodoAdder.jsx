import todoStore from "../../Store/todoStore";
import TextInput from "../textInput/textInput";

function TodoAdder(){
 const {AllTodos,setTodo, todo} = todoStore();
    let x = "";
    function handleOnChange(e){
        x = e.target.value;
    }

    function handleSubmit(){
             if(x === ""){
                return ;
             }else{
                 setTodo(x);
                
             }
    }
               console.log(AllTodos);
        return(
            <>
            <div>
          <TextInput

          placeholder = "Write your todo"
          onChangeHandler = {handleOnChange}
          handleSubmit = {handleSubmit}
          />
            </div>
            </>
        )
}

export default TodoAdder;