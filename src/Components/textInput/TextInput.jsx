
import todoStore from "../../Store/todoStore";
 import './textInput.css'
 function TextInput({placeholder, onChangeHandler, handleSubmit}){
           return(
           <div>
            <input type="text"
            placeholder= {placeholder}
            onChange={onChangeHandler}
            className="input-field"
            />
             
             <button 
          type= "button"
          onClick={handleSubmit}
          className="btn"
           >
               ADD 
     </button>
            
           </div>
           )
}

export default TextInput;