import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-play-queue',
  templateUrl: './play-queue.component.html',
  styleUrls: ['./play-queue.component.scss']
})
export class PlayQueueComponent implements OnInit {

  constructor() {
  }

  is_active = true;
  alarm = true;

  ngOnInit(): void {
  }

}
