const AddTodo = (props) => {
    const {todo, setTodo, handleOnClickBtn} = props;

    return(
        <div>
            <label>Todo's name:</label>
                 <input value={todo} type="text" onChange={(event) =>{
                     setTodo(event.target.value)
                     }}></input>
                <button type='button' onClick={() => {
                    handleOnClickBtn()
                    }}>Submit</button>
                    <br></br>
                    <br></br>
        </div>
    )
}

export default AddTodo;