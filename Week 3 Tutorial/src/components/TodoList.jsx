function TodoList({tasks, setTasks}) {

    function editTask(task){
        const newTask = prompt("Edit task", task.text)

        const updatedTasks = tasks.map((t) =>
            t.id === task.id ? {...t, text: newTask} : t
        )
        setTasks(updatedTasks)
    }

    function deleteTask(task){
        let response = confirm("Are you sure you want to delete " + task.text+"?")
        if(!response) return

        const remainingTasks = tasks.filter((t) => t.id !== task.id);
        setTasks(remainingTasks)
    }

    return (
        <ul>
            {tasks.map((task)=> {
                return <li key={task.id}>
                    <span>{task.text}</span>
                    <button onClick={() => editTask(task)}>Edit</button>
                    <button onClick={()=> deleteTask(task)}>Delete</button>
                </li>
            })}
        </ul>
    )
}

export default TodoList