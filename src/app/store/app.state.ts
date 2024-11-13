import { ActionReducerMap } from "@ngrx/store";
import { StateInitTask } from "../core/interfaces/task";
import { _taskReducers } from "./reducers/tasks.reducers";

export interface AppState {
    task: StateInitTask
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    task: _taskReducers
}