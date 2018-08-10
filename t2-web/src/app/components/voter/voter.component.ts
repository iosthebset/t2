import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  up: number = 0;
  down: number = 0;

  constructor() { }

  ngOnInit() {
  }

  getResult(vote: boolean) {
    if (vote) {
      this.up +=1;
    } else {
      this.down +=1;
    }
  }

}
