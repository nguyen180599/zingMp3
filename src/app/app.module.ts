import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {HighchartsChartModule} from "highcharts-angular";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from "@angular/material/icon";
import {MenuSidebarComponent} from './menu-sidebar/menu-sidebar.component';
import {HeaderComponent} from './header/header.component';
import {PlayQueueComponent} from './play-queue/play-queue.component';
import {HomeComponent} from './home/home.component';
import {SwiperModule} from 'swiper/angular';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {DetaiComponent} from './detai/detai.component';
import {SliderComponent} from './home/component/slider/slider.component';
import {HistoryComponent} from './home/component/history/history.component';
import {PlaylistSectionComponent} from './home/component/playlist-section/playlist-section.component';
import {PlayerControlComponent} from './player-control/player-control.component';
import {AngMusicPlayerModule} from "ang-music-player";
import {PlyrModule} from "ngx-plyr";
import {FormsModule} from "@angular/forms";
import { NameToUrlPipe } from './name-to-url.pipe';
import { HighChartComponent } from './home/component/high-chart/high-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSidebarComponent,
    HeaderComponent,
    PlayQueueComponent,
    HomeComponent,
    DetaiComponent,
    SliderComponent,
    HistoryComponent,
    PlaylistSectionComponent,
    PlayerControlComponent,
    NameToUrlPipe,
    HighChartComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    SwiperModule,
    AngMusicPlayerModule,
    PlyrModule,
    FormsModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
