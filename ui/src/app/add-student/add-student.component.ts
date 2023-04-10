import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentsform : FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.studentsform= this.formbuilder.group({
      // id:[],
      name:[''],
      department:[''],
      rollNumber:[''],
      birthDate:[''],
      mobileNumber:['']
    })
  }

  ngOnInit(): void {
  }

  sStudent(){
    const studentData = this.studentsform.value;
    this.http.post("http://localhost:8080/Student/saveStudent", studentData).subscribe(response=>{
      console.log('Student saved to DB', response);
      this.router.navigateByUrl('/student')
    }, error=>{
      console.error("Error occured in save Student", error);
    });
  }

}
