import { useState } from 'react'

const Todo = () => {
    interface TodoType {
        id: number,
        task: string,
        completed: boolean
    }
    const [todos, setTodos] = useState<TodoType[]>([])
    const [task, setTask] = useState('');
    const [error, setError] = useState('')

    const addTodo = () => {
        if(task.trim() ===''){
            setError('Please enter a task before adding.');
            return;
        }
        const newTodo: TodoType = {
            id: todos.length+1,
            task: task.trim(),
            completed: false
        }
        setTodos(prevTodos => [...prevTodos, newTodo]);
        setTask('');
        setError('')
    }
    const markAsDone = (id: number) => {
      setTodos((prevTodos)=>(
        prevTodos.map((todo)=>(
          todo.id === id ? {...todo, completed: true}: todo
        ))
      ))
    }
  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" placeholder='Enter a task' value={task} onChange={(e)=>{
        setTask(e.target.value)
        setError('');
      }}/>
      <button onClick={addTodo}>Add Todo</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <ul>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.task} {todo.completed ? "(Completed)": "(Pending)"}{" "}
                {!todo.completed && (
                  <button type='button' onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
                )}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
