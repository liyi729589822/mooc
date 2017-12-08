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
  bannerleft:any;
  private banner:any = [];
  localFlag:boolean;
  localVal:string;
  private bannerdata = [
    {"picurl":"../../assets/img/banner1.jpg"},
    {"picurl":"../../assets/img/banner2.jpg"},
    {"picurl":"../../assets/img/banner3.jpg"},
    {"picurl":"../../assets/img/banner4.jpg"}
  ]
  constructor(private http:Http,private bannerService:BannerService) { }

  ngOnInit() {
    
     this.bannerService.getBanner()
        .subscribe( bannerleft => {
          this.bannerleft = bannerleft[0].result
          // console.log(bannerleft[0].result)
          // console.log(this.bannerleft);
        },function(){
          console.log("111")
          this.bannerleft.map(function(item){
            this.banner.push({name:"item.name",icon:"item.mobIcon"});
          })
          // console.log(this.banner);
        })

        if(localStorage.getItem("username")){
          this.localFlag = true;
          this.localVal = localStorage.getItem("username");
          console.log(this.localFlag);
        }else{
          this.localFlag = false;
          // console.log(this.localFlag);
        }
      
        
        
        // eval("helloworld(name)");  
       


      
    // this.bannerleft.map(function(item){
    //   this.banner.push({name:"item.name",icon:"item.mobIcon"})
    // })

    // console.log(this.banner);
      
  }

  

}
