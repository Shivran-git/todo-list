function Editor({close, handleChange}){
      return(
        <>
        <input
         type="text"
         onChange={handleChange}
         className="input-field"
         />
        <button onClick={close} className="btn">Submit</button>
        </>
      )
}

export default Editor ;