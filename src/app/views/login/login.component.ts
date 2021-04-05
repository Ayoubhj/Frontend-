import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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
    await this.log.login(data).subscribe(
      (result:any)=> {
         localStorage.setItem('token',result.access_token);
         this.route.navigate(['']);
      },
      error =>{
        console.log('error')
        console.log(error)
      }
    )
  }
  facelogin(){
    this.log.facebookLogin().subscribe(res => {
      if(res.url){
         window.location.href = res.url
      }
    });
  }
  ngOnInit(): void {
  }


}
