import axios from "axios";
import { Task } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getTasks = async (): Promise<Task[]> => {
    const res = await axios.get(API_URL);

    return res.data.slice(0, 30).map((task: Task) => {
        return {
            userId: task.userId,
            id: task.id,
            title: task.title,
            completed: task.completed,
            priority: "low",
        };
    });
};