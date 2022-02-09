import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { addEmployee } from '../state/employees.actions';
import { EmployeeState } from '../state/employees.reducer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {
  employeeForm!: FormGroup;
  empList: any
  date: any
  employees:any

  Department: Array<any> = [
    {
      name: 'HR',
      value: 'HR'
    },
    {
      name: 'Sales',
      value: 'Sales'
    },
    {
      name: 'Finance',
      value: 'Finance'
    },
    {
      name: 'Engineer',
      value: 'Engineer'
    },
    {
      name: 'Others',
      value: 'Others'
    },

  ]
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private store: Store<EmployeeState>,private router:Router) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$/g)]],
      profilePic: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      salary: ['', [Validators.required]],
      date: ['', [Validators.required]],
      note: ['', [Validators.required]],
      isArray: this.formBuilder.array([], [Validators.required]),
      service: ['advance']
    });

   
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  onSubmit() {
   
   this.employees = {
      id: '',
      fullName: this.employeeForm.value.fullName,
      profilePic: this.employeeForm.value.profilePic,
      gender: this.employeeForm.value.gender,
      salary: this.employeeForm.value.salary,
      date: this.employeeForm.value.date,
      note: this.employeeForm.value.note,
      department: this.employeeForm.value.isArray

    }
    this.store.dispatch(addEmployee(this.employees))
    console.log("employee added succesfully");
    this.router.navigateByUrl('/list')
    
  }

  // onAddEmp() {
  //   if (!this.empForm.valid) {
  //     return;
  //   }
  //   const post: Post = {
  //     title: this.empForm.value.title,
  //     description: this.empForm.value.description,

  //   };
  //   this.store.dispatch(addPost({ post }));
  // }

  onChange(event: any) {
    const isArray: FormArray = this.employeeForm.get('isArray') as FormArray

    if (event.target.checked) {
      isArray.push(new FormControl(event.target.value));
    
    
     
     
    }
    else {
      let i: number = 0;
      isArray.controls.forEach((item: any) => {
        if (item.value == event.target.value) {
          isArray.removeAt(i);
          return;
        }
        i++;
      })
    }
  }

  

}
