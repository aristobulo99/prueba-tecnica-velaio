import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectTaskState = (state: AppState ) => state.task;

export const selectorTask = createSelector(
    selectTaskState,
    (state) => state.tasks
);