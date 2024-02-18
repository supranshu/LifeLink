import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../../services/helper';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'] 
})
export class ContactComponent implements OnInit {
  instName: string = '';
  inst: any; 

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.instName = params['instName'];
      this.getInst(); 
    });
  }

  getInst(): void {
    this.http.get<any[]>(`${baseUrl}/get-single-inst/${this.instName}`).subscribe(
      (response) => {
        this.inst = response;
        console.log(response)
      },
      (error) => {
        console.error('Error fetching institution details:', error);
      }
    );
  }
}
