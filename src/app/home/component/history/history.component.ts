import {Component, DoCheck, OnInit} from '@angular/core';
import {ServiceHttpService} from "../../../Services/service-http.service";
import {Song} from "../../../model/song";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, DoCheck {

  constructor(private serverHttp: ServiceHttpService) {

  }

  listSongs!: Song[];
  isPlay= false;
  indexPlay = 0;
  nearlyIndex = 0;
  prevSong: Song[] = [];

  ngOnInit(): void {
    this.serverHttp.getSong().subscribe((data) => {
      if (data) {
        this.listSongs = data.filter((data1) => data1.nearly > 0);
        // this.listSongs = data;

      }
    });
  }

  addToPlayList(song: any, e: any) {
    e.stopPropagation();  // nổi event lên trên thẻ a
    this.prevSong.push(song);
    if (this.isPlay == true && this.prevSong[0] == song){
      this.serverHttp.isPlayMusic = false;
    }
    else if (this.isPlay == false && this.prevSong[0] == song) {
      this.serverHttp.isPlayMusic = true;
    }
    else if (this.prevSong[0] != song) {
      this.serverHttp.isPlayMusic = true;
    }
    this.isPlay = this.serverHttp.isPlayMusic;
    // chỉ phát bài chọn mới nhất
    this.indexPlay = song.id;
    let arr = song;
    this.serverHttp.musicSubject.next(song);
    if (this.prevSong.length >= 2) {
      this.prevSong.splice(0, this.prevSong.length - 1);
    }
    this.listSongs[this.listSongs.indexOf(song)].hot = !this.listSongs[this.listSongs.indexOf(song)].hot;
  }

  ngDoCheck(): void {
    this.isPlay = this.serverHttp.isPlayMusic;
  }
}
