import Tasks from "./Tasks"

const Task = ({task, onDelete, onToggle}) =>
{
    return (
        <>
            {task.map((task, index) => (<Tasks key={index} task={task}  onDelete ={onDelete} onToggle={onToggle}  />
            ))}
        </>
    )
}

export default Task
