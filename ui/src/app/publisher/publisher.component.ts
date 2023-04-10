import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  title = "Publishers List"

  publishers:any = []
  constructor(private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPublishers()
  }

  addPublisher(){
    console.log("addPublsiher buttons clicked")
    //Take user to /add-publisher url
    this.router.navigateByUrl('/add-publisher')
  }

  fetchAllPublishers(){
    this.http.get("http://localhost:8080/Publisher/getAllPublishers").subscribe( response =>{
      this.publishers=response;
      console.log('Books retrieved successfully:',this.publishers)
    }, error => {
      console.error('Error retrieving books:',error);
    } );
  }

  deletePublisher(publisherId: Number){

    const url = 'http://localhost:8080/Publisher/delete/'+publisherId
    console.log(publisherId)
    this.http.delete(url).subscribe(response =>{
      console.log('Publisher Deleted Successfully');
      this.fetchAllPublishers()
    }, error => {
      console.error('Error in deleting publisher:', error);
    });
  }
}
