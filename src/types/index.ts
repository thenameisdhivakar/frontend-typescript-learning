export type Priority = "low" | "medium" | "high" | "critical";
export type Status = "completed" | "pending";

export interface Task {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    priority: Priority;
}