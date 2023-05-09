import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../interface/image.interface';

@Component({
  selector: 'kandy-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements OnInit{

ngOnInit(): void {
  if (this.autoSlide) {
    this.nextClickImage()
  }
}

nextClickImage(){
  setInterval(()=>{
    this.nextClick()
  }, 3000)
}
@Input() image: Image[] = []

@Input() dotted = true;

@Input() autoSlide = false;

imageSelected = 0;

toggle(index: number){
  this.imageSelected = index
}

nextClick(){
  if (this.imageSelected == this.image.length - 1) {
    this.imageSelected = 0
  }else{
    this.imageSelected++;
  }
}
}
