import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { sign } from 'node:crypto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  public loginUser(loginData:any){
   
    localStorage.setItem("InstName",loginData.inst)
    return this.http.post(`${baseUrl}/inst-login`,loginData)
  }

  public signUser(signData:any){

    return this.http.post(`${baseUrl}/singup-inst`,signData);
  }
}
