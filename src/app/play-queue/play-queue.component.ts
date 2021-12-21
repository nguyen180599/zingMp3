import {Component, DoCheck, OnInit} from '@angular/core';
import {ServiceHttpService} from "../Services/service-http.service";
import {Song} from "../model/song";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-play-queue',
  templateUrl: './play-queue.component.html',
  styleUrls: ['./play-queue.component.scss']
})
export class PlayQueueComponent implements OnInit, DoCheck {

  constructor(private serverHttp: ServiceHttpService) {
    this.isPlay = this.serverHttp.isPlayMusic;
  }
  playList: Song[] = [];
  ngDoCheck(): void {
    this.isPlay = this.serverHttp.isPlayMusic;
    // this.serverHttp.playList = this.playList;
  }

  is_active = true;
  alarm = true;
  isPlay = false;
  indexPlay = this.serverHttp.idSongIsPlay;
  prevSong: Song[] = [];
  unSubscribeAll!: Subject<any>;

  ngOnInit(): void {
    this.serverHttp.musicSubject.subscribe((Item) => {
      if(Item != ''){
        if (!this.playList.includes(Item) && Item != '') {
          this.playList.push(Item);
        } else {
          let index = this.playList.indexOf(Item);
          this.playList.splice(index, 1);
          this.playList.push(Item);
        }
        this.isPlay = this.serverHttp.isPlayMusic;
        this.indexPlay = this.playList[0].id;
      }
    });
    this.serverHttp.playList = this.playList;
  }
  playSong(song: any, e: any) {
    this.serverHttp.isPlayMusic = !this.serverHttp.isPlayMusic;
    this.isPlay = this.serverHttp.isPlayMusic;

    this.indexPlay = this.playList[0].id;
  }

  deleteList() {
    this.serverHttp.playList = [];
    this.playList = [];
  }

}
