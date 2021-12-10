import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import SwiperCore, {Autoplay, Navigation, EffectCoverflow, Pagination} from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, EffectCoverflow, Pagination]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
