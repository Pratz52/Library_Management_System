import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = "Student Details"

  students:any= []
    

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllStudents()
  }

  addStudent(){
    console.log("addStudent button clicked!!")
    //Take user to /add-books url
    this.router.navigateByUrl('/add-student')
  }

  fetchAllStudents(){
    this.http.get("http://localhost:8080/Student/getAllStudent").subscribe( response =>{
      this.students=response;
      console.log('Students Retrieved Successfully',this.students)
    }, error=> {
      console.error('Error retrieving Students',error)
    });
  }

  // deleteStudent(studentId: Number){
  //   const url = 'http://localhost:8080/Student/delete/'+studentId
  //   console.log(studentId)
  //   this.http.delete(url).subscribe(response=>{
  //     console.log('Student Deleted Successfully');
  //     this.fetchAllStudents()
  //   }, error=>{
  //     console.error('Error in deleting book:', error)
  //   })
  // }
  deleteStudent(studentId: Number){

    const url = 'http://localhost:8080/Student/delete/'+studentId
    console.log(studentId)
    this.http.delete(url).subscribe(response =>{
      console.log('Book Deleted Successfully');
      this.fetchAllStudents()
    }, error => {
      console.error('Error in deleting book:', error);
    })
  }
  }
