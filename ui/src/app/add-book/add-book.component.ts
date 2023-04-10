import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
    booksform : FormGroup;

  constructor(private formbuilder:FormBuilder, private http: HttpClient, private router: Router) {
    this.booksform= this.formbuilder.group({
      title:['',Validators.required],
      author:[''],
      isbn:['',Validators.required],
      publicationDate:[''],
      publisher:[''],
      copies:[0,Validators.required],
      category:[''],
      genre:[''],
      subgenre:['']
    })
   }

  ngOnInit(): void {
  }

  saveBook(){
    const bookData = this.booksform.value;
    this.http.post("http://localhost:8080/Book/saveBook", bookData)
        .subscribe(response => {
          console.log("Book saved to DB", response);
          this.router.navigateByUrl('/book')
        },
        error => {
          console.error("Error occured in Book Save", error);
        });

  }
  }


