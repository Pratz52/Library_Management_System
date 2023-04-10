import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-publisher',
  templateUrl: './add-publisher.component.html',
  styleUrls: ['./add-publisher.component.css']
})
export class AddPublisherComponent implements OnInit {
  publishersform : FormGroup

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.publishersform= this.formbuilder.group({
      name:["", Validators.required],
      address:[""],
      phoneNo:[""],
      emailId:["", Validators.email]
    })
  }

  ngOnInit(): void {
  }

  savePublisher(){
    const publisherData = this.publishersform.value;
    this.http.post("http://localhost:8080/Publisher/savePublisher", publisherData)
        .subscribe(response => {
          console.log("Publisher saved to DB", response);
          this.router.navigateByUrl('/publisher')
        },
        error => {
          console.error("Error occured in Publisher Save", error);
        });

  }

}
