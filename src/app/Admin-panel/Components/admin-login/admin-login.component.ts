import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserServicesService} from "../../../services/user/user-services.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  FormLogin: FormGroup;
  constructor(private fb:FormBuilder,private log: UserServicesService,private route : Router) {
    this.FormLogin = this.fb.group({
      email :["",Validators.compose([Validators.required,Validators.email])],
      password :["",Validators.compose([Validators.required,Validators.minLength(8)])]
    });
  }
  get email(){
    return this.FormLogin.get('email');
  }
  get password(){
    return this.FormLogin.get('password');
  }
  async submit(){
    const data = this.FormLogin.value;
    await this.log.loginadmin(data).subscribe(
      (result:any)=> {
        localStorage.setItem('token',result.access_token);
        this.route.navigate(['admin/dashboard']);
      },
      error =>{
        console.log('error')
        console.log(error)
      }
    )
  }

  ngOnInit(): void {
  }

}
