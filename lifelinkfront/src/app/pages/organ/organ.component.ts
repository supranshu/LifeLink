import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../../services/helper'; 

@Component({
  selector: 'app-organ',
  templateUrl: './organ.component.html',
  styleUrls: ['./organ.component.css'] 
})
export class OrganComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }
  orgName: string = '';
  instName: string = '';
  organs: any; 

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.orgName = params['orgName'];
      this.instName = params['instName'];
      this.getOrgans();
    });
  }

  getOrgans(): void {
    this.http.get<any[]>(`${baseUrl}/get-organs/${this.instName}`).subscribe(
      (response) => {
        this.organs = response;
        console.log(response)
      },
      (error) => {
        console.error('Error fetching organs:', error);
      }
    );
  }

  public contactOrganization(){
       
  }
}
