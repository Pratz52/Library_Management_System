import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  title = "Book Details"
  
  books:any = []
  
  constructor(private router : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllBooks()
  }


  addBooks(){
    console.log("addBooks button clicked!!")
    //Take user to /add-books url
    this.router.navigateByUrl('/add-book')
  }


fetchAllBooks(){
  this.http.get("http://localhost:8080/Book/getAll").subscribe( response =>{
    this.books=response;
    console.log('Books retrieved successfully:',this.books)
  }, error => {
    console.error('Error retrieving books:',error);
  } );
}

deleteBook(bookId: Number){

  const url = 'http://localhost:8080/Book/delete/'+bookId
  console.log(bookId)
  this.http.delete(url).subscribe(response =>{
    console.log('Book Deleted Successfully');
    this.fetchAllBooks()
  }, error => {
    console.error('Error in deleting book:', error);
  });
}
}
