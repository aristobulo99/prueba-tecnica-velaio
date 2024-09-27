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