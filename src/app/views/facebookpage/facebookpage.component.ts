import { Component, OnInit } from '@angular/core';
import {UserServicesService} from "../../services/user/user-services.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-facebookpage',
  templateUrl: './facebookpage.component.html',
  styleUrls: ['./facebookpage.component.css']
})
export class FacebookpageComponent implements OnInit {

  constructor(private log: UserServicesService,private route : ActivatedRoute,private router1 : Router) { }
  router ;
  ngOnInit(): void {
    this.login()
  }

  login(){
     this.route.queryParams.subscribe(res => {
         this.router = res.code;
     });
     this.log.facebookLogincallback({code : this.router}).subscribe(res => {
       localStorage.setItem('token',res.access_token);
       this.router1.navigate(['']);
     })
  }

}
