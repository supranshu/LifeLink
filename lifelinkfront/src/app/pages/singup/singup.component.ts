import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrl: './singup.component.css'
})
export class SingupComponent {

  public signData={
    instName: "",
    instType: "",
    contactNo: "",
    email: ""
  }

  constructor(private snack:MatSnackBar) { }

  onSubmit(): void {
    
    this.snack.open("OOOOKKKKKKK")
  }
}
