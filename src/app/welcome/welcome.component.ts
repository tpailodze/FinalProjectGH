import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  slides = [
    {imgUrl: "../assets/iconfinder_facebook_605511.png"},
    {'image': '../assets/greece.jpg'},{'image': './../assets/france.jpg'} ];

  constructor() { }

  ngOnInit(): void {
  }
  
}
