import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/model/employees.model';
import { UpdateEmployeesComponent } from 'src/app/update-employees/update-employees.component';
import { AddEmpComponent } from '../add-emp/add-emp.component';
import { deleteEmployee, deleteEmployeeSuccess, loadpost, loadpostSuccess } from '../state/employees.actions';
import { EmployeeState } from '../state/employees.reducer';
import { listSelector } from '../state/employees.selector';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private http: HttpClient, private store: Store<EmployeeState>,public dialog: MatDialog,private router:Router) { }
  
  employee: Employee[] = [];
  employee$ = this.store.pipe(select(listSelector))
  value = '';
  done = new Subject();
  ngOnInit(): void {
   
    this.store.select(listSelector).subscribe((data:any) => {
      console.log(data);
    })
    
    this.getList()
   
  }


  ondel(id: string) {
    this.store.dispatch(deleteEmployee(id))
    console.log("deleted");
    
  }

  getList() {
    this.store.dispatch(loadpost())
    

  }

  openDialog(employee: any) {
    localStorage.setItem('id', employee.id)
    const dialogRef = this.dialog.open(UpdateEmployeesComponent,{
      width: "600px",
      data: employee,

    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      
    });
  }
  onadd(){
    this.router.navigateByUrl('/addemp')
  }
}
