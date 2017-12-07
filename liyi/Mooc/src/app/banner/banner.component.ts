import { Component, OnInit } from '@angular/core';
// import "../../lib/swiper3.3.1.min.js"
import {Http} from "@angular/http"
import { Observable } from 'rxjs';
import { BannerService, Banner } from '../service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers:[BannerService] 
})
export class BannerComponent implements OnInit {
  // private bannerleft:string []
  bannerleft:Banner
  private banner:Banner
  private bannerdata = [
    {"picurl":"../../assets/img/banner1.jpg"},
    {"picurl":"../../assets/img/banner2.jpg"},
    {"picurl":"../../assets/img/banner3.jpg"},
    {"picurl":"../../assets/img/banner4.jpg"}
  ]
  constructor(private http:Http,private bannerService:BannerService) { }

  ngOnInit() {
    
     this.bannerService.getBanner().subscribe( bannerleft => {this.bannerleft = bannerleft;
      console.log(bannerleft)})
    // console.log(this.bannerleft)
  }

}
