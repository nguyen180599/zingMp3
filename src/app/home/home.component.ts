// noinspection TypeScriptCheckImport

import {Component, ViewEncapsulation, OnInit, HostListener, Inject} from '@angular/core';
import SwiperCore, {Autoplay, Navigation, EffectCoverflow, Pagination} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, EffectCoverflow, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

}
