import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

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
      hotelName: 'Denvil Hotel',
      hotelCountry: 'France',
      imgUrl: '../../assets/france.jpg',
      rating: '4 stars',
      availability: true,
      petsallowed: true,
      price: "105",
      datefrom: '',
      dateuntill: '',
      roomType:['single', 'double', 'family', 'king Size'],
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure optio mollitia veritatis dolorum officia laudantium. Officiis hic, provident autem iste quos tenetur ratione. Voluptas, eius perspiciatis vero iusto voluptate possimus!'
    
    },
    {
      hotelId: 2,
      hotelName: 'Denvil Hotel',
      hotelCountry: 'Greece',
      imgUrl: '../../assets/france.jpg',
      rating: '5 stars',
      availability: true,
      petsallowed: true,
      price: "105",
      datefrom: '',
      dateuntill: '',
      roomType:['single', 'double', 'family', 'king Size'],
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure optio mollitia veritatis dolorum officia laudantium. Officiis hic, provident autem iste quos tenetur ratione. Voluptas, eius perspiciatis vero iusto voluptate possimus!'
    },
    {
      hotelId: 3,
      hotelName: 'Denvil Hotel',
      hotelCountry: 'Italy',
      imgUrl: '../../assets/france.jpg',
      rating: '3 stars',
      availability: true,
      petsallowed: false,
      price: "105",
      datefrom: '',
      dateuntill: '',
      roomType:['single', 'double', 'family', 'king Size'],
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure optio mollitia veritatis dolorum officia laudantium. Officiis hic, provident autem iste quos tenetur ratione. Voluptas, eius perspiciatis vero iusto voluptate possimus!'
    },
    {
      hotelId: 4,
      hotelName: 'Denvil Hotel',
      hotelCountry: 'Spain',
      imgUrl: '../../assets/france.jpg',
      rating: '5 stars',
      availability: false,
      petsallowed: false,
      price: "105",
      datefrom: '',
      dateuntill: '',
      roomType:['single', 'double', 'family', 'king Size'],
      description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure optio mollitia veritatis dolorum officia laudantium. Officiis hic, provident autem iste quos tenetur ratione. Voluptas, eius perspiciatis vero iusto voluptate possimus!'
    },
   
  ]


}
