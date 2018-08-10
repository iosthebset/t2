import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votercontrol',
  templateUrl: './voter-control.component.html',
  styleUrls: ['./voter-control.component.css']
})
export class VoterControlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onGetVote(vote: boolean) {
    if (vote) {
      console.log("+1");
    } else {
      console.log("-1");
    }
  }
}
