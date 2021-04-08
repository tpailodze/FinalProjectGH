import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  slides = [
    {'image': "../../assets/spain.jpg"},
    {'image': '/assets/greece.jpg'},
    {'image': '/assets/france.jpg'} 
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
}
