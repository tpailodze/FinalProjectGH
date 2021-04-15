import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HotelDataService} from '../../hotel-data.service';

@Component({
  selector: 'app-single-hotel',
  templateUrl: './single-hotel.component.html',
  styleUrls: ['./single-hotel.component.scss']
})
export class SingleHotelComponent implements OnInit {

  constructor(private router: ActivatedRoute, private ps: HotelDataService) { }

  singleHotel = null

  // getsinglehotel(id:number){
  //   let hotel=null;
  //   for(let i=0; i<this.hotelsArray.length; i++){
  //     if(this.hotelsArray[i].hotelId ===id){
  //       hotel = this.hotelsArray[i]
  //       return hotel
  //     }
  //   }
  // }

  ngOnInit(): void {
    const hotelID= this.router.snapshot.params.id;

    const hotel = this.ps.getHotel(hotelID);

    hotel.valueChanges().subscribe((data) => {
      this.singleHotel = data;
      console.log(this.singleHotel)
    })

    
  }

}
