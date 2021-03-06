import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  roomType : string;
  numOfSuit : string;
  numOfPerson : string;
  numOfChildren : string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit( ) {

    this.route.queryParams

      .subscribe(params => {
        console.log(params); // {name: "popular"}

        this.roomType = params.roomType;
        this.numOfSuit = params.numOfSuit;
        this.numOfPerson = params.numOfPerson;
        this.numOfChildren = params.numOfChildren;

        console.log(this.roomType); // popular
      });
 
    }
  }

