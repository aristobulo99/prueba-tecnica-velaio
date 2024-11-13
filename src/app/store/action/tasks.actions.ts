import { createAction, props } from "@ngrx/store";
import { Task, TaskData } from "src/app/core/interfaces/task";


export const getAllTaskRequest = createAction(
    "[Task] get All Task Request"
);

export const getAllTaskSuccess = createAction(
    "[Task] get All Task Success",
    props<{tasks: TaskData[]}>()
);

export const getTaskCompleteRequest = createAction(
    "[Task] get Task Complete Request",
    props<{complete: boolean}>()
);

export const getTaskCompleteSuccess = createAction(
    "[Task] get Task Complete Success",
    props<{tasks: TaskData[]}>()
);

export const patchTaskCompleteRequest = createAction(
    "[Task] patch Task Complete Request",
    props<{patchTask: {id: string, completed: boolean}}>()
);

export const patchTaskCompleteSuccess = createAction(
    "[Task] patch Task Complete Success",
    props<{patchTask: {id: string, completed: boolean}}>()
);


export const TaskFailure = createAction(
    "[Task] Tasl Failure",
    props<{error: string}>()
);