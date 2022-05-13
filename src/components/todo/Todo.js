import './Todo.css'
import TodoList from '../todo-list/TodoList'
import TodoCreate from '../todo-create/TodoCreate'

// component Todo menggunakan function
const Todo = () => {
    const todos = [
        { id: 1, title: 'Eat' }, // data array yg merupakan object
        { id: 2, title: 'Sleep' },
        { id: 3, title: 'Code' }
    ]

    const eventCreateTodo = (todo) => {
        todos.push(todo)
        console.log(todos);
    }

    return (
        <div>
            <h3>Todo List</h3>
            {/* props yg berbentuk fungsi sebaiknya diawali dg 'on' */}
            <TodoCreate onCreateTodo = {eventCreateTodo}/>
            {/* dataTodos berkaitan dengan props begitu juga dgn onCreateTodo*/}
            <TodoList dataTodos = {todos} />
        </div>
    )
}

export default Todo