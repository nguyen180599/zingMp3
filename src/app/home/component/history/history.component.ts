import {Component, OnInit} from '@angular/core';
import {ServiceHttpService} from "../../../Services/service-http.service";
import {Song} from "../../../model/song";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private serverHttp: ServiceHttpService) {
  }

  listSongs!: Song[];
  isPlay= false;
  nearlyIndex = 0;

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
    let arr = song;
    this.serverHttp.musicSubject.next(song);
    console.log(this.serverHttp.musicSubject);
    this.isPlay = !this.isPlay;
    console.log(this.isPlay);
  }
}
