import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/Rx"
@Injectable()
export class BannerService {

  constructor(private http:Http) { }

  getBanner():Observable<any>{
    // var num = this.http.get("http://localhost:7750/getdata")
    // console.log(num);
    // console.log("11111")
    // var num = this.http.get("http://localhost:7750/getbannerleft").map(res=>res.json());
    // console.log(num);
    return this.http.get("http://localhost:7750/getbannerleft").map(res=>res.json())
      
  } 

}

export class Banner{
  constructor(
    public name:string,
    public pic:string
  ){

  }
}
