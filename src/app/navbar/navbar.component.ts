import { Component } from '@angular/core';

@Component({
  selector: 'kandy-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss','./mobile.component.scss']
})
export class NavbarComponent {


  shopping: string[] = [
    'cloths and wears',
    'computer and tech',
    'tools and equipments',
    'sports and outline',
    'food items',
    'drinks'
 ]

  filterSearch(e: Event){

  }
}
