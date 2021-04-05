import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  image = "../assets/home.jpg";
  clothes = "../assets/clothes.jpg";
  shoes = "../assets/shoes.jpg";
  watch = "../assets/watch.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
