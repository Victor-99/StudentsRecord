import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDetailsService } from '../../Services/student-details.service';
import { Student } from '../../../StudentInterface';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  id:number;
  dataKnown:Student;
  Test:any;
  constructor(private dataService:StudentDetailsService,private activatedRoute:ActivatedRoute,private router:Router) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{this.id=Number(params.get("id"))})
    this.dataService.getById(this.id)
    .subscribe((student)=>{this.dataKnown=student},error=>{
      alert(error.error.detail)
    });
    
  }
  async onEdit(value:Student){
    console.log(this.dataKnown);
    this.dataService.editData(value,this.id).subscribe(()=>{
      alert("Data edited successfully");
      this.router.navigate(['',value.RollNo]);
    },error=>{
      alert(error.error.detail);
    });
    
  }

}
