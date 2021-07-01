import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { StudentDetailsService } from '../../Services/student-details.service';
import { Student } from '../../../StudentInterface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})


export class StudentDetailsComponent implements OnInit {
  x: number;
  marks: number;
  percent: number;
  studnt: Student;
  result: string[] = ['Pass', 'Compart', 'Fail'];
  highlight: string = "";


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private getService: StudentDetailsService) { }
  async ngOnInit() {
    const prevState = window.history.state;
    this.activatedRoute.paramMap.subscribe((params) => {
      this.x = Number(params.get("id"));
    })
    if (prevState.RollNo) {
      console.log("has Prev state");
      this.studnt = prevState;

    }
    else {
      console.log("Getting by Id");
      await this.getService.getByIdAsync(this.x).toPromise().then((student) => { this.studnt = student }).catch(error => {
        alert(error.error.detail);
      })
      this.calcMarks();
    }

  }
  calcMarks() {
    let resStatus = 0
    this.studnt.marks = this.studnt.Hindi + this.studnt.English + this.studnt.Mathematics + this.studnt.Science + this.studnt.PhE;
    if (this.studnt.Hindi < 35) {
      resStatus += 1;
    }
    if (this.studnt.English < 35) {
      resStatus += 1;
    }
    if (this.studnt.Mathematics < 35) {
      resStatus += 1;
    }
    if (this.studnt.Science < 35) {
      resStatus += 1;
    }
    if (this.studnt.PhE < 35) {
      resStatus += 1;
    }
    if (resStatus === 0) {
      this.studnt.result = this.result[0];
    }
    else if (resStatus == 1) {
      this.studnt.result = this.result[1];
    }
    else if (resStatus >= 1) {
      this.studnt.result = this.result[2];

    }
  }

  changeColor(marks: number) {
    if (marks < 35) {
      this.highlight = "table-danger";
    }
    else {
      this.highlight = "";
    }
    return this.highlight;
  }



  deleteDetails() {
    this.getService.removeData(this.x).subscribe(() => {
      alert("The student has been deleted. Redirecting to home page");
      this.router.navigate(['']);
    }, error => {
      alert(error.error.detail);
    });
  }

  editDetails(id: number) {
    this.router.navigate(['/edit', id]);
  }
}
