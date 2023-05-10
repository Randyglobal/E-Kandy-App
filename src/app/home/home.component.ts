import { Component } from '@angular/core';

@Component({
  selector: 'kandy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images =[
    {
      imageSrc: '../../assets/img/phone.jpg',
      imageAlt: 'shop1',
    },
    {
      imageSrc: '../../assets/img/pc.jpeg.jpg',
      imageAlt: 'shop2',
    },
    {
      imageSrc: '../../assets/img/supermarket.jpg',
      imageAlt: 'shop3',
    },
    {
      imageSrc: '../../assets/img/tablet.jpg',
      imageAlt: 'shop3',
    },
  ]
}
