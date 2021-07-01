import { Component, OnInit, Input } from '@angular/core';

import { StudentDetailsService } from '../../Services/student-details.service';
import { Student } from '../../../StudentInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-tab',
  templateUrl: './student-tab.component.html',
  styleUrls: ['./student-tab.component.css']
})
export class StudentTabComponent implements OnInit {
  students: Student[] = []
  errorMsg: string;
  result: string[] = ['Pass', 'Compart', 'Fail'];
  
  constructor(private detailsService: StudentDetailsService, private router: Router) {

  }

  async ngOnInit() {
    await this.detailsService.getData().toPromise().then((students) => { this.students = students }, error => {
      alert(error.error.detail);
    });
    this.calcMarks();

  }
  
  calcMarks() {
    for (let index = 0; index < this.students.length; index++) {
      let resStatus= 0;
      this.students[index].marks = this.students[index].Hindi + this.students[index].English + this.students[index].Mathematics + this.students[index].Science + this.students[index].PhE;
      if (this.students[index].Hindi < 35) {
        resStatus += 1;
      }
      if (this.students[index].English <35) {
        resStatus += 1;
      }
      if (this.students[index].Mathematics <35) {
        resStatus += 1;
      }
      if (this.students[index].Science <35) {
        resStatus += 1;
      }
      if (this.students[index].PhE <35) {
        resStatus += 1;
      }
      if (resStatus === 0) {
        this.students[index].result = this.result[0];
      }
      else if (resStatus == 1) {
        this.students[index].result = this.result[1];
      }
      else if (resStatus >= 1) {
        this.students[index].result = this.result[2];

      }
    }
  };

  cardColor(res:string){
    let color:string="powderblue";
    if(res===this.result[1]){
      color=""

      
    }
  }

  viewCard(id: number) {
    this.router.navigate(['', id])
  }

  orderBy(viewBy: any) {

    if (viewBy.value === 'Overall') {
      this.students.sort((a: any, b: any) => {
        return a.marks - b.marks;
      }).reverse();
    }
    else if (viewBy.value === 'Hindi') {
      this.students.sort((a: any, b: any) => {
        return a.Hindi - b.Hindi;
      }).reverse();
    }
    else if (viewBy.value === 'English') {
      this.students.sort((a: any, b: any) => {
        return a.English - b.English;
      }).reverse();
    }
    else if (viewBy.value === 'Mathematics') {
      this.students.sort((a: any, b: any) => {
        return a.Mathematics - b.Mathematics;
      }).reverse();
    }
    else if (viewBy.value === 'Science') {
      this.students.sort((a: any, b: any) => {
        return a.Science - b.Science;
      }).reverse();
    }
    else if (viewBy.value === 'PhE') {
      this.students.sort((a: any, b: any) => {
        return a.PhE - b.PhE;
      }).reverse();
    }

    else {
      this.students.sort((a: any, b: any) => {
        return a.RollNo - b.RollNo;
      });


    }
  }

}
