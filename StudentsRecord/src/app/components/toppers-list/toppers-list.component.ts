import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../../StudentInterface';

@Component({
  selector: 'app-toppers-list',
  templateUrl: './toppers-list.component.html',
  styleUrls: ['./toppers-list.component.css']
})
export class ToppersListComponent implements OnInit {

  @Input() data:Student[];
  mark:number;
  indx:number[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
