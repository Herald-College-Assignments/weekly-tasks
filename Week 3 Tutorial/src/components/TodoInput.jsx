import {useState} from "react";

function TodoInput({tasks, setTasks}) {
    const [input, setInput] = useState("")

    function handleAdd() {
        if (input === "") return

        const newTask = {
            id: Date.now(),
            text: input,
        }
        setTasks([...tasks, newTask])
        setInput("")
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Task.."
                className="input-field"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
            />

            <button onClick={()=>{handleAdd()}} className="input-btn">+</button>
        </div>
    )
}

export default TodoInput;