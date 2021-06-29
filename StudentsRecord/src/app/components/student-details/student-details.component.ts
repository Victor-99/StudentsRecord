import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


import { StudentDetailsService } from '../../Services/student-details.service';
import { Student } from '../../../StudentInterface';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  x:number;
  marks:number;
  percent:number;
  stud: Student;
  constructor(private activatedRoute: ActivatedRoute,private router:Router, private getService: StudentDetailsService) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.x=Number(params.get("id"));
    })
    this.getService.getById(this.x)
      .subscribe((student) => { this.stud = student },error=>{
        alert(error.error.detail);
      })
      
      
  }

  
  deleteDetails() {
    this.getService.removeData(this.x).subscribe(()=>{
      alert("The student has been deleted. Redirecting to home page");
      this.router.navigate(['']);
    },error=>{
      alert(error.error.detail);
    });
      

  }
}
