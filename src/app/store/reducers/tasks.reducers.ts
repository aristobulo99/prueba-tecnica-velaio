import { createReducer, on } from "@ngrx/store";
import { StateInitTask } from "src/app/core/interfaces/task";
import { getAllTaskRequest, getAllTaskSuccess, getTaskCompleteRequest, getTaskCompleteSuccess, patchTaskCompleteRequest, patchTaskCompleteSuccess } from "../action/tasks.actions";

export const initialStateOfTasks: StateInitTask = {
    tasks: [],
    loading: false,
    success: false
}

export const _taskReducers = createReducer(
    initialStateOfTasks,
    on(getAllTaskRequest, (state) => ({
        ...state,
        loading: true,
        success: false
    })),
    on(getAllTaskSuccess, (state, {tasks}) => ({
        ...state,
        tasks: tasks,
        loading: true,
        success: false
    })),
    on(getTaskCompleteRequest, (state) => ({
        ...state,
        loading: true,
        success: false
    })),
    on(getTaskCompleteSuccess, (state, {tasks}) => ({
        ...state,
        tasks: tasks,
        loading: true,
        success: false
    }))
    ,
    on(patchTaskCompleteRequest, (state) => ({
        ...state,
        loading: true,
        success: false
    })),
    on(patchTaskCompleteSuccess, (state, {patchTask}) => ({
        ...state,
        tasks: state.tasks.map(task => 
            task.id === patchTask.id 
                ? { ...task, completed: patchTask.completed }
                : task
        ),
        loading: true,
        success: false
    }))

)