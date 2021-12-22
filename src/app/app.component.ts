import {Component, DoCheck} from '@angular/core';
import {ServiceHttpService} from "./Services/service-http.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'zingmp3';

  constructor(private serverHttp: ServiceHttpService) {
  }

  isMusic = false;
  ngDoCheck(): void {
    if (this.serverHttp.playList.length == 0) {
      this.isMusic = false;
    } else {
      this.isMusic = true;
    }
  }

}
