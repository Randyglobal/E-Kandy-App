import { Component } from '@angular/core';

@Component({
  selector: 'kandy-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
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
