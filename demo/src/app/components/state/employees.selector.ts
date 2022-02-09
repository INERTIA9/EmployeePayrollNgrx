import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Employee } from "src/app/model/employees.model";
import { EmployeeState } from "./employees.reducer";


export const listSelector=createSelector(
    (state:EmployeeState)=> state.employees,
    (employees:ReadonlyArray<Employee>)=>employees
)


// export const getPostById = createSelector(getPostState, (state, props) => {
//     console.log(props);
//     return state.posts.find(post => post.id === props.id)
// })
