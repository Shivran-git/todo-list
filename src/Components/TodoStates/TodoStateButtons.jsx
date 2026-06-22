import './TodoStates.css'

function TodoStateButtons({allSetter, completeSetter, pendingSetter}){
   console.log("i got rendered")
    return(
        <>
        <div>
            <button
            type="button"
            onClick={allSetter}
            className='btn-state'
            > All </button>
            <button
            type="button"
            onClick={pendingSetter}
            className='btn-state'
            > Pending </button>
            <button
            type="button"
            onClick={completeSetter}
            className='btn-state'
            > Complete </button>
            
        </div>
        </>
    )
}
export default TodoStateButtons;