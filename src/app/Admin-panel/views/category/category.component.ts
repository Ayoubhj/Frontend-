import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
declare var $;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit ,AfterViewInit{
  @ViewChild('dataTable',{static : false}) table;
  dataTable: any ;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataTable = $(this.table.nativeElement);
    this.table.DataTable();
  }

}
