import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {

    return (
        // state is immutable so you would use the given update function 'setTasks([...tasks, {}])'
        // given update function acts as mutable useState function
        <div>
            {tasks.map((task) => ( // You will also often see parenthesis around object literals because that's a way to avoid the parser treating it as a code block:
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
            ))}
        </div>
    )
}

export default Tasks
