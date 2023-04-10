import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  title = "Admins Page"
  admins:any = []
  
  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAdmins()
  }

  addAdmins(){
    console.log("addAdmins button clicked!!")
    //Take user to /add-admins url
    this.router.navigateByUrl('/add-admin')
  }

  fetchAllAdmins(){
    this.http.get("http://localhost:8080/Admin/getAllAdmin").subscribe( response =>{
      this.admins=response;
      console.log('Admins retrieved successfully:',this.admins)
    }, error => {
      console.error('Error retrieving admins:',error);
    } );
  }

  deleteAdmin(adminId: Number){

    const url = 'http://localhost:8080/Admin/delete/'+adminId
    console.log(adminId)
    this.http.delete(url).subscribe(response =>{
      console.log('Admin Deleted Successfully');
      this.fetchAllAdmins()
    }, error => {
      console.error('Error in deleting Admin:', error);
    });
  }
}
