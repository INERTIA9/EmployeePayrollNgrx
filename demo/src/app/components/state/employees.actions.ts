import { createAction, props } from "@ngrx/store";
import { Employee } from "src/app/model/employees.model";



export const ADD_POST_ACTION = '[post page] add post';
export const UPDATE_POST_ACTION = '[post page] update post'
export const DELETE_POST_ACTION = '[post page] delete post'
export const LOAD_POST_SUCCESS = '[post page] emplistsuccess post'
export const L0AD_POSTS = '[post page] emplistloaded'



export const addEmployee = createAction(ADD_POST_ACTION, props<{ employees: ReadonlyArray<Employee> }>())

export const loadpostSuccess = createAction(LOAD_POST_SUCCESS, (employees: ReadonlyArray<Employee>) => ({ employees }))

export const loadpost = createAction(L0AD_POSTS);


export const addEmployeeSuccess = createAction('[Employee] Add Employee Success',
    props<{ employees: Employee }>())


export const deleteEmployeeSuccess = createAction('[Employee] Delete Employee Success',
    (employeeId: string) => ({ employeeId }))


    export const updateEmployee = createAction('[Employee] Update Employee',
    (employees: any) => ({ employees }))

    export const updateEmployeeSuccess = createAction('[Employee] Update Employee Success',
    (employees: any) => ({ employees }))


    export const deleteEmployee = createAction('[Employee] Delete Employee ', 
    (employeeId: string) => ({ employeeId }))


//     export const deleteEmployee = createAction('[Employee] Delete Employee',
//     (employeeId: number) => ({ employeeId }))

// export const deleteEmployeeSuccess = createAction('[Employee] Delete Employee Success',
//     (employeeId: number) => ({ employeeId }))