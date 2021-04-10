import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.scss']
})
export class SingleHotelComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

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
  singleHotel = null

  getsinglehotel(id:number){
    let hotel=null;
    for(let i=0; i<this.hotelsArray.length; i++){
      if(this.hotelsArray[i].hotelId ===id){
        hotel = this.hotelsArray[i]
        return hotel
      }
    }
  }

  ngOnInit(): void {
    const hotelID= +this.router.snapshot.params.id;
    this.singleHotel = this.getsinglehotel(hotelID);
    console.log(this.singleHotel)
    
  }

}
