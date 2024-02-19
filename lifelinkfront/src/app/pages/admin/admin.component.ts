import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import baseUrl from '../../services/helper';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
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

  this.router.navigateByUrl(`/inst-page/${instName}`); 

  }
}
