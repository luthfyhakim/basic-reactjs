import './TodoCreate.css'

// fungsi props utk mengirimkan data antar komponen
const TodoCreate = (props) => {
    // membuat fungsi event handle utk button submit
    const handleSubmit = (event) => {
        event.preventDefault() // utk menghandle fungsi behaviour/bawaan 

        // object data
        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            title: 'Learn react'
        }

        // mengirim data newTodo ke parent komponen Todo
        props.onCreateTodo(newTodo)

        console.log(newTodo)
    }

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoCreate