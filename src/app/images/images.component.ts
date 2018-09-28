import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images: any[];

  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/images/galleria1.jpg', title: 'Title 1' });
    this.images.push({ source: 'assets/images/galleria2.jpg', title: 'Title 2' });
    this.images.push({ source: 'assets/images/galleria3.jpg', title: 'Title 3' });
    this.images.push({ source: 'assets/images/galleria4.jpg', title: 'Title 4' });
    this.images.push({ source: 'assets/images/galleria5.jpg', title: 'Title 5' });
    this.images.push({ source: 'assets/images/galleria6.jpg', title: 'Title 6' });
    this.images.push({ source: 'assets/images/galleria7.jpg', title: 'Title 7' });
    this.images.push({ source: 'assets/images/galleria1.jpg', title: 'Title 8' });
  }

}
