import { Component } from '@angular/core';

@Component({
  selector: 'kandy-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss','./mobile.component.scss','./tablet.component.scss']
})
export class NavComponent {

  ancho = {
    home: "home",
    blog: "blog",
   services: "services",
   help: "help",
   contactus: "contact us"
   }
}
