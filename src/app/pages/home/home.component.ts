import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  postersUrls = [
    'assets/server/posters/poster-1.jpg',
    'assets/server/posters/poster-2.jpg',
  ];

  products = [
    {
      price: 129,
      name: 'Ring Video Doorbell 2 with Echo Show 5',
      imageUrl: 'assets/server/products/product-1.jpg',
      rating: 4,
    },
    {
      price: 59.99,
      // tslint:disable-next-line: max-line-length
      name: 'Blink Indoor Home Security Camera System with Motion Detection, HD Video, 2-Year Battery Life and Cloud Storage Included - 1 Camera Kit',
      imageUrl: 'assets/server/products/product-2.jpg',
      rating: 0,
    },
    {
      price: 24.99,
      // tslint:disable-next-line: max-line-length
      name: 'Wyze Cam 1080p HD Indoor Wireless Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, One Pack, White - WYZEC2',
      imageUrl: 'assets/server/products/product-3.jpg',
      rating: 5,
    },
    {
      price: 133,
      // tslint:disable-next-line: max-line-length
      name: 'Furbo Dog Camera: Treat Tossing, Full HD Wifi Pet Camera and 2-Way Audio, Designed for Dogs, Compatible with Alexa (As Seen On Ellen) by Furbo',
      imageUrl: 'assets/server/products/product-4.jpg',
      rating: 3,
    }
  ]

  index = 0;

  constructor() { }

  displayNextPoster() {
    this.index = (this.index + 1) % this.postersUrls.length;
  }

  displayPreviousPoster() {
    this.index = (this.index - 1) % this.postersUrls.length;
  }


}
