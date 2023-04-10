import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  authorsform : FormGroup

  constructor(private formbuilder:FormBuilder, private http: HttpClient, private router: Router ) { 
    this.authorsform= this.formbuilder.group({
      name:[""],
      birthDate:[""],
      nationality:[""]
    })
  }

  ngOnInit(): void {
  }

  saveAuthor(){
    const authorData = this.authorsform.value;
    this.http.post("http://localhost:8080/Author/saveAdmin", authorData)
        .subscribe(response => {
          console.log("Author saved to DB", response);
          this.router.navigateByUrl('/author')
        },
        error => {
          console.error("Error occured in Author Save", error);
        });

  }

}
