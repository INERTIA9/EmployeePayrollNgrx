
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY, Observable } from "rxjs";
import { mergeMap, map, exhaustMap, catchError, concatMap } from 'rxjs/operators';
import { EmployeeService } from "src/app/employeeService/employeeservice";
import { Employee } from "src/app/model/employees.model";
import { addEmployee, addEmployeeSuccess, deleteEmployee, deleteEmployeeSuccess, loadpost, loadpostSuccess, updateEmployee, updateEmployeeSuccess } from "./employees.actions";




@Injectable()
export class employeeEffects {
    [x: string]: any;
    constructor(private actions$: Actions, private http: HttpClient, private postService: EmployeeService) {

    }



    addEmployee$ = createEffect(
        () => {
            return this.actions$.pipe(ofType(addEmployee), mergeMap(newEmployee => {
                return this.postService.addPost(newEmployee).pipe(map((employees:any) => {
                    return addEmployeeSuccess( employees )

                }))
            }))


        });

    // loadEmployees$ = createEffect(
    //     () => {
    //         return this.actions$.pipe(ofType(loadpost), mergeMap(() => {
    //            this.postService.getPost().pipe(map(data:any) => {


    //                 return loadpost({ data })

    //             }))
    //         }))


    //     });
    //     loadEmployees$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(loadpost),
    //         exhaustMap(() =>
    //             this.service.getData().pipe(
    //                 map((employee: any) => getEmployeeSuccess(employee)),
    //                 catchError(() => EMPTY)
    //             ))
    //     )
    // );

    getEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(loadpost),
            exhaustMap(() =>
                this.postService.getPost().pipe(
                    map((employees: any) => loadpostSuccess(employees)),
                    catchError(() => EMPTY)
                ))
        )
    });

    deleteEmployee$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(deleteEmployee),
            concatMap(({ employeeId }) =>
                this.postService.deletePost(employeeId).pipe(
                    map(() => deleteEmployeeSuccess(employeeId)),
                    catchError(() => EMPTY)
                ))
        )
    });


    updateEmployees$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(updateEmployee),
            exhaustMap(({ employees }) =>
                this.postService.updatePost(employees).pipe(
                    map((employee: any) => updateEmployeeSuccess(employee)),
                    catchError(() => EMPTY)
                ))
        )
    });
}

