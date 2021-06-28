import { Component, OnInit, Input } from '@angular/core';
import { StudentDetailsService } from '../../Services/student-details.service';
import { Student } from '../../../StudentInterface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private postData:StudentDetailsService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(data:Student){
    this.postData.postData(data).subscribe();
    alert("Adding data");
    this.router.navigate(['']);
  }
}
