import { Person } from "./person"

export interface Task{
    nameTask: string,
    dateLimit: Date,
    completed: boolean
    persons: Person[]
}

export interface TaskData extends Task{
    id: string
}

export interface StateInitTask {
    tasks: TaskData[],
    loading: boolean,
    success: boolean
}