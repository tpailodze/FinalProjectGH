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
      imgUrl: ''
    },
    {
      hotelId: 2,
      hotelName: 'DFG',
      imgUrl: ''
    },
    {
      hotelId: 3,
      hotelName: '',
      imgUrl: ''
    },
    {
      hotelId: 4,
      hotelName: '',
      imgUrl: ''
    },
   
  ]


}
