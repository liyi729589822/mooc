import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeadComponent } from './head/head.component';
import { BannerComponent } from './banner/banner.component';
import { HttpModule } from '@angular/http';
import { TuijianComponent } from './tuijian/tuijian.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeadComponent,
    BannerComponent,
    TuijianComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
