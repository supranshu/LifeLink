// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../../services/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  organizations: any[] = [];

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.getOrganizations();
  }

  getOrganizations(): void {
    this.http.get<any[]>(`${baseUrl}/get-all-inst`).subscribe(
      (response) => {
        this.organizations = response;
        console.log(response)
      },
      (error) => {
        console.error('Error fetching organizations:', error);
      }
    );
  }

  public navigateToOrganization(instName:any){

  this.router.navigateByUrl("/inst-page")    

  }
}
