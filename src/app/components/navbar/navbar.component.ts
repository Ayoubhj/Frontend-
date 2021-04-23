import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {UserServicesService} from "../../services/user/user-services.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  Dropdown = true
  dropmenu = true


  constructor(public authuser : UserServicesService) { }

  ngOnInit(): void {
    this.authuser.UserData();
  }

  toggle(){
    this.Dropdown = !this.Dropdown;
  }
  toggledrop () {
    this.dropmenu = !this.dropmenu;
  }



}
