import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from '../../StudentInterface';


@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {

  data:any;
  private apiUrl="http://localhost:8000"

  constructor(private http:HttpClient) { }

  getData():Observable<Student[]>{
    return this.http.get<Student[]>(this.apiUrl)
  }

  getById(id:number){
    return this.http.get<Student>(this.apiUrl+'/'+id)
  }
  
  async getByIdAsync(id:number){
    await this.http.get<Student>(this.apiUrl+'/'+id).toPromise().then(res=>{
      this.data=res;
    })
    return this.data
  }

  removeData(id:number){
    return this.http.delete<Student>(this.apiUrl+'/'+id)
  }

  postData(body:Student){
    return this.http.post<Student>(this.apiUrl,body)
  }

  editData(body:Student,id:number){
    return this.http.put<Student>(this.apiUrl+'/edit/'+id,body)

  }
}
