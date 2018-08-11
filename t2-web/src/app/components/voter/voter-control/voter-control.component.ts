import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-votercontrol',
  templateUrl: './voter-control.component.html',
  styleUrls: ['./voter-control.component.css']
})
export class VoterControlComponent implements OnInit {

  @Output() onVote = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onGetVote(vote: boolean) {
    if (vote) {
      this.onVote.emit(true);
    } else {
      this.onVote.emit(false);
    }
  }
}
