import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/user/user-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   FormRegister: FormGroup;
   error ;
  constructor(private fb:FormBuilder,private log: UserServicesService,private route : Router ) {
    this.FormRegister = this.fb.group({
      name :["",Validators.compose([Validators.required,Validators.minLength(3)])],
      email :["",Validators.compose([Validators.required,Validators.email])],
      password :["",Validators.compose([Validators.required,Validators.minLength(8)])],
      confirm_password :["",Validators.compose([Validators.required,Validators.minLength(8)])],
    });

   }
   get email(){
    return this.FormRegister.get('email');
  }
   get name(){
    return this.FormRegister.get('name');
  }
  get password(){
    return this.FormRegister.get('password');
  }
  ngOnInit(): void {

  }

    async submit(){
    const data = this.FormRegister.value;
    await this.log.register(data).subscribe(
      (result:any)=> {
         console.log(result)
         this.route.navigate(['/login']);
      },
      error =>{
         this.error = error.erorr;
      }
    )
  }
  faceRegister(){
    this.log.facebookLogin().subscribe(res => {
      if(res.url){
        window.location.href = res.url
      }
    });
  }
}
