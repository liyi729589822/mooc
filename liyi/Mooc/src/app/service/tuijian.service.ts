import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import "rxjs/Rx"

@Injectable()
export class TuijianService {

  constructor(private http:Http) { }

  getTuijian():Observable<any>{

    return this.http.get("http://localhost:7750/gettuijian").map(res=>res.json())
      
  } 

}
