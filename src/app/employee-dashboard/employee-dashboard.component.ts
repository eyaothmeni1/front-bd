import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { employee } from './../model/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  //employee: employee[];

  constructor(
    private router: Router,
    private empService: EmployeeService
    )
    {

  }

  ngOnInit() {
    this.getAllemp()
  }
  employ : any;
getAllemp()
{

  this.empService.getAll().subscribe(

 (response) =>{
 this.employ = response;

  console.log (this.employ)
 }




  )
}
}
