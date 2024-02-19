import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../../services/helper';


interface InstitutionResponse {
  instName: string;
  
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  public loginData={
    instName: '',
    password: ''

  };

  


  constructor(private login:LoginService, private snack:MatSnackBar, private router:Router, private http:HttpClient) { }

  formSubmit(){
    console.log("login button clicked")
    if(this.loginData.instName.trim()==''|| this.loginData.instName.trim()==null && this.loginData.password.trim()=='' || this.loginData.password.trim()==null ){
      this.snack.open("Fill all the form Fields",'',{
        duration:3000,
      });
      return
    }

    this.login.loginUser(this.loginData).subscribe(
      (data:any)=>{
        if(data==true){
          this.snack.open("login successfull",'',{duration:3000})
          this.http.get<InstitutionResponse>(`${baseUrl}/get-single-inst/${this.loginData.instName}`).subscribe(
            (response) => {
              if (response.instName === 'Admin') {
                this.router.navigateByUrl("/admin");
              } else {
                this.router.navigateByUrl("/dashboard");
              }
            }
          );
        }else{
          this.snack.open("invalid credentials",'',{duration:3000})
        }
        (error:any)=>{
          this.snack.open("Something is wrong",'',{duration:3000})
        }
      }
    )
   


  }
}
