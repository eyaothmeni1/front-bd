import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpclient: HttpClient,
    private router: Router) { }
    getAll()
    {
      return this.httpclient.get("http://localhost:9999/employee/")
    }
}

