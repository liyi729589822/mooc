import { Component, OnInit } from '@angular/core';
import { TuijianService } from '../service/tuijian.service';
import {Http} from "@angular/http"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tuijian',
  templateUrl: './tuijian.component.html',
  styleUrls: ['./tuijian.component.css'],
  providers:[TuijianService]
})
export class TuijianComponent implements OnInit {

  tuijian:any;

  constructor(private tuijianService:TuijianService) { }

  ngOnInit() {

    this.tuijianService.getTuijian()
        .subscribe(tuijian =>{
          this.tuijian = tuijian[0].result
          console.log(this.tuijian)
        })
  }

}
