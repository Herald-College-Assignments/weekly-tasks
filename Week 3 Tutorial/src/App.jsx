import TodoList from "./components/TodoList.jsx";
import TodoInput from "./components/TodoInput.jsx";
import {useState} from "react";

function App() {

    const [tasks, setTasks] = useState([])

    return (
        <>
            <TodoInput tasks={tasks} setTasks={setTasks}/>
            <TodoList tasks={tasks} setTasks={setTasks}/>
        </>
    )
}

export default App