import {AfterViewInit, Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import {ServiceHttpService} from "../Services/service-http.service";

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-player-control',
  templateUrl: './player-control.component.html',
  styleUrls: ['./player-control.component.scss']
})
export class PlayerControlComponent implements AfterViewInit {
  @ViewChild("audio") audio!: ElementRef;
  @ViewChild("source") source!: ElementRef;


  ngAfterViewInit() {}

  constructor(
    private serverHttp: ServiceHttpService
  ) {}

  ngOnInit(): void {
    this.serverHttp.getSong().subscribe((data) => {
    });
    this.serverHttp.musicSubject.subscribe((playItem) => {
      console.log(playItem);
    } );
  }

  currentIndex = 0;
  isPlaying = false;
  isRandom = false;
  isRepeat = false;
  isVolumeOn = true;
  currentTime = 0;
  volume = 1;
  config = {};

  audioList = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
    }
  ];

  setConfig = function (key: any, value: any) {
    // @ts-ignore
    this.config[key] = value;
  };

  playBtn = () => {
    if (this.isPlaying == true) {
      this.audio.nativeElement.play();
      console.log(this.audio);
    } else {
      this.audio.nativeElement.pause();
    }
  };

  loadCurrentSong() {
    this.audio.nativeElement.src = this.audioList[this.currentIndex].url;
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
  }

  mute() {
    this.audio.nativeElement.volume = 0;
    this.volume = 0;
  }
  unmute() {
    this.audio.nativeElement.volume = 0.5;
    this.volume = 0.5;
  }
}

