import { useState } from "react"

export default function TodoList() {
    let [todos, setTodos] = useState(["one", "two", "three"]),


        [newTask, setNewTask] = useState("")

    let addNewTask = () => {
        // setTodos([...todos, newTask])
        let newTodos = [...todos];
        newTodos.push(newTask);
        setTodos(newTodos)
        setNewTask("")
    }   

    let deleteTask = (taskIndex) => {
        // console.log("Delete : " + index)
        let newTodos = todos.filter((todo, i) => i !== taskIndex);
        setTodos(newTodos)
    }
    return (
        <div>
            <h2>TodoList</h2>

            <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)} />

            <button onClick={addNewTask}>Add new</button>
            <ul>
                {
                    todos.map((todo, index) =>
                        <li key={index}>
                            {todo} &nbsp;
                            <button onClick={() => deleteTask(index)}>Delete</button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
