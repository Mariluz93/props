function Task({ id, text, completed, deleteTask, taskCompleted }) {
    return (
        <>
            <p
                onClick={() => taskCompleted(id)}
                style={{
                    textDecoration: completed ? "line-through" : "none",
                    cursor: "pointer"
                }}
            >
                {text}
            </p>

            <button onClick={() => deleteTask(id)}>Eliminar</button>
        </>
    );
}

export default Task;