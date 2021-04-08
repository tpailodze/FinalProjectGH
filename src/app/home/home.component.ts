import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filtersArray = [
    {
      filterId: 1,
      filterName: 'Popular Hotels'
    },
    {
      filterId: 2,
      filterName: '5 stars'
    },
    {
      filterId: 3,
      filterName: 'Pets allowed'
    },
   
  ]

  hotelsArray = [
    {
      hotelId: 1,
      hotelName: 'ABC',
      imgUrl: '../../assets/france.jpg'
    },
    {
      hotelId: 2,
      hotelName: 'DFG',
      imgUrl: '../../assets/greece.jpg'
    },
    {
      hotelId: 3,
      hotelName: '',
      imgUrl: '../../assets/italy.jpg'
    },
    {
      hotelId: 4,
      hotelName: '',
      imgUrl: '../../assets/spain.jpg'
    },
   
  ]


}
