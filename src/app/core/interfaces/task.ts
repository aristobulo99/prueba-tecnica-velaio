import { Person } from "./person"

export interface Task{
    nameTask: string,
    dateLimit: Date,
    completed: boolean
    persons: Person[]
}