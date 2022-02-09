import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeState } from '../components/state/employees.reducer';
import { EmployeeService } from '../employeeService/employeeservice';
import { Store } from '@ngrx/store';
import { updateEmployee, updateEmployeeSuccess } from '../components/state/employees.actions';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.scss']
})
export class UpdateEmployeesComponent implements OnInit {

  fullName: any
  profilePic: any
  gender: any
  salary: any
  note: any
  department: any
  empId: any
  UpdateForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<UpdateEmployeesComponent>, private formBuilder: FormBuilder, private postService: EmployeeService, private http: HttpClient, private store: Store<EmployeeState>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {

    this.fullName = data.fullName
    this.profilePic = data.profilePic
    this.gender = data.gender
    this.salary = data.salary
    this.note = data.note
    this.department = data.department
    this.empId = data.id
    console.log(data);
  }


  ngOnInit(): void {


    this.UpdateForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      profilePic: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date: ['', [Validators.required]],
      note: ['', [Validators.required]],
      department: ['', [Validators.required]],
      service: ['advance']

    })
  }
  onupdate() {
    
    let reqData = {
      id:'',
      fullName: this.UpdateForm.value.fullName,
      profilePic:this.UpdateForm.value.profilePic,
      gender: this.UpdateForm.value.gender,
      salary: this.UpdateForm.value.salary,
      note: this.UpdateForm.value.note,
      department: this.UpdateForm.value.department,

    }
    console.log(reqData);
    
    this.store.dispatch(updateEmployee(reqData))
    console.log(this.empId);

    this.dialogRef.close();
  }

}
