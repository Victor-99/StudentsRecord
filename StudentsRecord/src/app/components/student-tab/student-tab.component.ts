import { Component, OnInit,Input } from '@angular/core';

import {StudentDetailsService} from '../../Services/student-details.service';
import { Student } from '../../../StudentInterface';

@Component({
  selector: 'app-student-tab',
  templateUrl: './student-tab.component.html',
  styleUrls: ['./student-tab.component.css']
})
export class StudentTabComponent implements OnInit {
  students:Student[]=[]
  constructor(private detailsService:StudentDetailsService) { }

  ngOnInit(): void {
    this.detailsService.getData()
    .subscribe((students)=>this.students=students);
  }


}
