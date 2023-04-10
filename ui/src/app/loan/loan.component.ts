import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  title = "Book Managemnt"

  loans:any = []

  constructor(private router : Router, private http: HttpClient) {

   }

  ngOnInit(): void {
    this.fetchAllLoan()
  }

  addLoan(){
    console.log("addBooks button clicked!!")
    //Take user to /add-books url
    this.router.navigateByUrl('/add-loan')
  }

  fetchAllLoan(){
    this.http.get("http://localhost:8080/Loan/getAllLoan").subscribe( response =>{
      this.loans=response;
      console.log('Loans retrieved successfully:',this.loans)
    }, error => {
      console.error('Error retrieving loans:',error);
    } );
  }

  deleteLoans(loanId: Number){

    const url = 'http://localhost:8080/Loan/delete/'+loanId
    console.log(loanId)
    this.http.delete(url).subscribe(response =>{
      console.log('Loan Deleted Successfully');
      this.fetchAllLoan()
    }, error => {
      console.error('Error in deleting Loan:', error);
    });
  }
}
