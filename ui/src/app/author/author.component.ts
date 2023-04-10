import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

   title = "Author Table"

   authors:any = []

  constructor(private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAuthors()
  }

  addAuthor(){
    console.log("addAuthor button clicked!!")
    //Take user to /add-books url
    this.router.navigateByUrl('/add-author')
  }

  fetchAllAuthors(){
    this.http.get("http://localhost:8080/Author/getAllAuthors").subscribe( response =>{
      this.authors=response;
      console.log('Books retrieved successfully:',this.authors)
    }, error => {
      console.error('Error retrieving books:',error);
    } );
  }

  deleteAuthor(authorId: Number){

    const url = 'http://localhost:8080/Author/delete/'+authorId
    console.log(authorId)
    this.http.delete(url).subscribe(response =>{
      console.log('Book Deleted Successfully');
      this.fetchAllAuthors()
    }, error => {
      console.error('Error in deleting book:', error);
    });
  }
}
