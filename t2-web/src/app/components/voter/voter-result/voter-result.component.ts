import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-voterresult',
  templateUrl: './voter-result.component.html',
  styleUrls: ['./voter-result.component.css']
})
export class VoterResultComponent implements OnInit, OnChanges {

  @Input() upVote: number;
  @Input() downVote: number;
  result: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.result = this.upVote - this.downVote;
  }

}
