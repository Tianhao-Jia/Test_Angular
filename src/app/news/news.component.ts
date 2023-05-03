import { Component,OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @ViewChild('mybox') myBox:any;
  constructor(){}


  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void{
    console.log(this.myBox);
  }


}
