import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../../services/helper';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrl: './institution.component.css'
})
export class InstitutionComponent implements OnInit {
  institutionName: string = '';
  organs: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.institutionName = params['instName'];
      this.getOrgans();
    });
  }

  getOrgans(): void {
    this.http.get<any[]>(`${baseUrl}/get-organs/${this.institutionName}`).subscribe(
      (response) => {
        this.organs = response;
        console.log(response)
      },
      (error) => {
        console.error('Error fetching organs:', error);
      }
    );
  }
}
