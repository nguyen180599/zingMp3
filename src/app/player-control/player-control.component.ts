import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ServiceHttpService} from "../Services/service-http.service";
import {Song} from "../model/song";

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.scss']
})
export class PlayerControlComponent implements OnInit, AfterViewInit, DoCheck, OnChanges {
  @ViewChild("audio") audio!: ElementRef;
  @ViewChild("source") source!: ElementRef;


  ngAfterViewInit() {
  }

  constructor(
    private serverHttp: ServiceHttpService
  ) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.serverHttp.playList.length != 0) {
      this.audio.nativeElement.src = this.audioList[0].path;
      this.audio.nativeElement.play();
      // this.isPlaying = this.serverHttp.isPlayMusic;
    }
    // if (this.audioList.length != 0) {
    //   if (this.isPlaying == true) {
    //     this.audio.nativeElement.play();
    //   } else{
    //     this.audio.nativeElement.pause();
    //   }
    // }
  }

  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    this.isPlaying = this.serverHttp.isPlayMusic;
    // if (this.audioList.length > 0 && this.isPlaying == true) {
    //   this.audio.nativeElement.play();
    // } else{
    //   this.audio.nativeElement.pause();
    // }
    if (this.serverHttp.playList.length == 0) {
      this.audioList = [];
    }


  }

  ngOnInit(): void {
    // console.log(this.audioList)
    this.audioList = this.serverHttp.playList;

    this.serverHttp.musicSubject.subscribe((playItem) => {
      if (playItem != '') {
        this.previousId.push(playItem.id);
        this.audioList = this.serverHttp.playList;
        this.isPlaying = this.serverHttp.isPlayMusic;
        this.currentIndex = this.audioList.length - 1;

        if (this.isPlaying == true) {
          if (playItem.id != this.previousId[0] ) {
            this.audio.nativeElement.src = playItem.path;
          }
          this.audio.nativeElement.play();
        } else {
          this.audio.nativeElement.pause();
        }
      }
      this.previousId.splice(0, 1)
    });

    if (this.serverHttp.playList.length > 0) {
      this.audioList = this.serverHttp.playList;

      if (this.audioList.length > 0) {
        this.index = this.audioList.findIndex((song) => {
          song.id == this.serverHttp.idSongIsPlay;
        });
        this.currentIndex = this.index;
        this.audio.nativeElement.src = this.audioList[this.index].path;
        this.audio.nativeElement.play();
        this.isPlaying = this.serverHttp.isPlayMusic;

      }
    } else {
      this.serverHttp.isPlayMusic = false;
      this.audioList = [];
      this.audio.nativeElement.stop();
    }

  }

  index = 0;
  previousId: number[] = [];
  currentIndex = 0;
  isPlaying = false;
  isRandom = false;
  isRepeat = false;
  isVolumeOn = true;
  currentTime = 0;
  volume = 1;
  pastVolume = this.volume;
  config = {};

  audioList: Song[] = [];

  setConfig = function (key: any, value: any) {
    // @ts-ignore
    this.config[key] = value;
  };

  playBtn = () => {
    this.isPlaying = !this.isPlaying;
    this.serverHttp.isPlayMusic = this.isPlaying;
    if (this.isPlaying == true) {
      this.audio.nativeElement.play();
      console.log(this.audio);
    } else {
      this.audio.nativeElement.pause();
    }


  };

  loadCurrentSong() {
    this.audio.nativeElement.src = this.audioList[this.currentIndex].path;
    this.serverHttp.idSongIsPlay = this.audioList[this.currentIndex].id;
  }

  playRandom() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.audioList.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  }

  nextSong = () => {
    if (this.isRandom) {
      this.playRandom();
    } else {
      this.currentIndex += 1;
      if (this.currentIndex >= this.audioList.length) {
        this.currentIndex = 0;
      }
    }
    this.loadCurrentSong();
    this.audio.nativeElement.play();
    this.isPlaying = true;
  }

  prevSong = () => {
    if (this.isRandom) {
      this.playRandom();
    } else {
      this.currentIndex -= 1;
      if (this.currentIndex < 0) {
        this.currentIndex = this.audioList.length - 1;
      }
    }
    this.loadCurrentSong();
    this.audio.nativeElement.play();
    this.isPlaying = true;
  }

  randomBtn() {
    this.isRandom = !this.isRandom;
    this.setConfig("isRandom", this.isRandom)
  }

  repeatBtn() {
    this.isRepeat = !this.isRepeat;
    this.setConfig("isRepeat", this.isRepeat);
  };

  _a = 0;

  formatTime(a: number) {
    let x = 0;
    let y = 0
    this._a = a;
    x = Math.floor(this._a / 60);
    y = this._a % 60;
    y = Math.floor(y)
    if (x >= 10 && y >= 10) {
      return x + ':' + y;
    } else if (x >= 10 && y < 10) {
      return x + ':' + '0' + y;
    } else if (x < 10 && y < 10) {
      return '0' + x + ':' + '0' + y;
    } else if (x < 10 && y >= 10) {
      return '0' + x + ':' + y;
    }
    return
  }

  handle() {
    // this.audio.nativeElement.src = this.audioList[this.currentIndex].url;
    if (this.audio.nativeElement.duration) {
      this.currentTime = Math.floor(this.audio.nativeElement.currentTime);
    }
    if (this.audio.nativeElement.currentTime == this.audio.nativeElement.duration) {
      this.nextSong();
    }
  }

  updateCurrentTime(e: any) {
    const seekTime = e.target.value;
    this.audio.nativeElement.currentTime = seekTime;
  }

  changeVolume(e: any) {
    const changevolume1 = e.target.value;
    this.audio.nativeElement.volume = changevolume1;
    this.volume = this.audio.nativeElement.volume;
    this.pastVolume = this.volume;
  }

  mute() {
    this.pastVolume = this.audio.nativeElement.volume;
    this.audio.nativeElement.volume = 0;
    this.volume = 0;
  }

  unmute() {

    this.audio.nativeElement.volume = this.pastVolume;
    this.volume = this.pastVolume;
  }
}

