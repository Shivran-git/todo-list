import { useState } from "react";
import { createContext } from "react";
import Toast from "../Components/Toast";
export const ToastContext = createContext();

export  function ToastProvider({children}){
      const [toast, setToast] = useState([]);

      function showToast(message){
        console.log("hereee")
        const id = Date.now();
        setToast(prev => [
            ...prev,
            {
                id : id,
                message:message 
            }
        ]);

        setTimeout(()=>{
           removeToast(id);
        }, 2000)

      }

      function removeToast(id){
        setToast(prev => prev.filter(toast => toast.id !== id))
      }
      return(
       <ToastContext.Provider value={{showToast}}>
        <div className="toast-container">
                           {toast.map((toast)=>(
            <Toast key = {toast.id}  message = {toast.message}    />
           ))}
        </div>
       
        {children}
           
       </ToastContext.Provider>
      )
}