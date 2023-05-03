import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  public fathermsg:string = 'I am father'
  public index:any;
  items:string[] = [];
  public key:any;
  ngOnInit(): void {
    
    
  
    
  }

  

  addItem(newItem: string) {
    this.items.push(newItem);
    this.index =this.items.indexOf(newItem);
    localStorage.setItem(this.index,newItem);
    
    
  }

  RemoveItem(item:string){
    this.index =this.items.indexOf(item);
    localStorage.removeItem(this.index);
    this.items.splice(this.index);
  }

  



}
