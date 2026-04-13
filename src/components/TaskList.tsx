import { useEffect, useState } from "react";
import { getTasks } from "../../src/api/tasks";
import { Task } from "../types";

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTasks().then((data) => {
            setTasks(data);
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading tasks...</p>;

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ marginBottom: "10px" }}>
                        <b>{task.title}</b> <br />
                        Status: {task.completed ? "Completed" : "Pending"} <br />
                        Priority: {task.priority}
                    </li>
                ))}
            </ul>
        </div>
    );
}