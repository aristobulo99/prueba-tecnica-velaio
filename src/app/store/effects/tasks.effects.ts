import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { TaskService } from "src/app/core/services/task/task.service";
import { getAllTaskRequest, getAllTaskSuccess, getTaskCompleteRequest, getTaskCompleteSuccess, patchTaskCompleteRequest, patchTaskCompleteSuccess, TaskFailure } from "../action/tasks.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { LoadingService } from "src/app/core/services/loading.service";
import { ToastService } from "src/app/core/services/toast/toast.service";

@Injectable()
export class TaksEffects {

    constructor(
        private actions$: Actions,
        private TaskService: TaskService,
        private loadigService: LoadingService,
        private toastService: ToastService
    ){}

    getAllTask$ = createEffect(
        () => this.actions$.pipe(
            ofType(getAllTaskRequest),
            exhaustMap(
                () => this.TaskService.getAllTask().pipe(
                    map((result) => getAllTaskSuccess({tasks: result})),
                    catchError(
                        error => {
                            this.loadigService.activeLoading = false;
                            this.toastService.showWarning('Ocurrio un error inesperado')
                            return of(TaskFailure({error: error}))
                        }
                    )
                )
            )
        )
    );

    getTaskComplete$ = createEffect(
        () => this.actions$.pipe(
            ofType(getTaskCompleteRequest),
            exhaustMap(
                (action) => this.TaskService.getByCompleted(action.complete).pipe(
                    map((result) => getTaskCompleteSuccess({tasks: result})),
                    catchError(
                        error => {
                            this.loadigService.activeLoading = false;
                            this.toastService.showWarning('Ocurrio un error inesperado')
                            return of(TaskFailure({error: error}))
                        }
                    )
                )
            )
        )
    )

    patchTaskComplete$ = createEffect(
        () => this.actions$.pipe(
            ofType(patchTaskCompleteRequest),
            exhaustMap(
                (action) => this.TaskService.patchTask(action.patchTask.id, action.patchTask.completed).pipe(
                    map(() => patchTaskCompleteSuccess({patchTask: action.patchTask})),
                    catchError(
                        error => {
                            this.loadigService.activeLoading = false;
                            this.toastService.showWarning('Ocurrio un error inesperado')
                            return of(TaskFailure({error: error}))
                        }
                    )
                )
            )
        )
    );
}