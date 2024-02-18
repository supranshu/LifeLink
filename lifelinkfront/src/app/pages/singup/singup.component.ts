import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  public signData={
    instName: "",
    instType: "",
    city: "",
    state: "",
    contactNo: "",
    email: "",
    password: "",
  }

  constructor(private snack:MatSnackBar,private service:LoginService,private router:Router) { }

  formSubmit() {
    this.snack.open("clicked")
    if(this.signData.instName.trim()==''|| this.signData.instName.trim()==null && this.signData.password.trim()=='' || this.signData.password.trim()==null ){
      this.snack.open("Fill all the form Fields",'',{
        duration:3000,
      });
      return

    }
    this.service.signUser(this.signData).subscribe(
      (data:any)=>{
        this.router.navigateByUrl("/")
      },
      (error)=>{
        this.snack.open("Something Went Wrong!!",'',{duration:3000})
      }
    )
  }
}
