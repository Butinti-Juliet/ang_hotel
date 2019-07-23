import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailsComponent } from '../details/details.component';
import { query } from '@angular/animations';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
 roomType: string;
 numOfSuit: string;
 numOfPerson: string;
 numOfChildren: string;
  constructor(private router: Router) { }
  
  onClick()
  {
    this.router.navigate(['/details'], {
    queryParams: { roomType: this.roomType,numOfSuit: this.numOfSuit, numOfPerson: this.numOfPerson, numOfChildren: this.numOfChildren } 

    });
  }
  
  

  ngOnInit() {

  }

}
