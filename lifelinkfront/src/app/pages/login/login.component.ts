import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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

  constructor(private login:LoginService, private snack:MatSnackBar, private router:Router) { }

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
          this.snack.open("login successfull")
          this.router.navigateByUrl("/dashboard")
        }else{
          this.snack.open("invalid credentials")
        }
        (error:any)=>{
          this.snack.open("Something is wrong")
        }
      }
    )



  }
}
