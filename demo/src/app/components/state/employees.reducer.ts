
import { createReducer, on } from "@ngrx/store";

import { Employee } from "src/app/model/employees.model";
import { addEmployee,  addEmployeeSuccess,  deleteEmployeeSuccess,  loadpost,  loadpostSuccess, updateEmployeeSuccess } from "./employees.actions";

export interface EmployeeState {
    employees: ReadonlyArray<Employee>;
}
export const initialState: ReadonlyArray<Employee> =[]
   
;




const _postsReducer = createReducer(initialState,

    on(addEmployeeSuccess, (state, {employees}) =>  [...state, employees]

        
           
        
    ),

    on (loadpostSuccess, (state, {employees})=>[...employees]
    
    
    ),

    on(deleteEmployeeSuccess, (state, { employeeId }) =>
    state.filter((employees) => employees.id !== employeeId)

    ),
    on(updateEmployeeSuccess, (state, { employees }) => {
        const emp = state.map((payload) => {
          if (payload.id === employees.id) {
            return employees;
          }
         return payload
        });
        return emp;
      })
    
    
)


export function postsReducer(state, action) {
    return _postsReducer(state, action);
}