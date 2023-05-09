import { Component } from '@angular/core';

@Component({
  selector: 'kandy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  images =[
    {
      imageSrc: '../../assets/img/Best-Delivery-Apps.jpg',
      imageAlt: 'shop1',
    },
    {
      imageSrc: '../../assets/img/Kids.jpg',
      imageAlt: 'shop2',
    },
    {
      imageSrc: '../../assets/img/Custom.jpeg',
      imageAlt: 'shop3',
    },
    {
      imageSrc: '../../assets/img/hero.webp',
      imageAlt: 'shop3',
    },
  ]
}
