import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  loansform : FormGroup

  constructor(private formbuilder : FormBuilder, private http: HttpClient, private router: Router) {
    this.loansform = this.formbuilder.group({
      bookId:['',Validators.required],
      studentId:['',Validators.required],
      chechOutDate:[''],
      dueDate:[''],
      returnDate:['']
    })
   }

  ngOnInit(): void {
  }

  saveLoan(){
    const loanData = this.loansform.value;
    this.http.post("http://localhost:8080/Loan/saveLoan", loanData)
        .subscribe(response => {
          console.log("Loan saved to DB", response);
          this.router.navigateByUrl('/loan')
        },
        error => {
          console.error("Error occured in Loan Save", error);
        });

  }
}
