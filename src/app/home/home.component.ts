import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AngularFireDatabase} from '@angular/fire/database';
import {HotelDataService} from '../hotel-data.service';
import {observable} from 'rxjs';
import {map} from 'rxjs/operators'
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filter= {
    namefilter: '',
    countryfilter: '',
    starsfilter: '',
    roomtypefilter: ''
   }
  

  hotels: any ;
 
  gethotelList(){
    this.ps.getInfolist().snapshotChanges().pipe(
      map(data=>{
       return data.map((info=> ({
         key:info.key, ...(info.payload.val() as {} ),
       })))
     })
    ).subscribe(data=>{
     this.hotels = data;
     console.log(this.hotels)
    });

  }

  filteredHotel: any;



  filterHotels(){
    for (let i=0; i<this.hotels.length; i++){
      if(this.hotels[i].hotelName == this.filter.namefilter|| this.hotels[i].HotelCountry == this.filter.countryfilter  
        || this.hotels[i].stars == this.filter.starsfilter || this.hotels[i].roomType == this.filter.roomtypefilter   ){
        this.filteredHotel.push(this.hotels[i]);
        console.log(this.filteredHotel)
        this.hotels = this.filteredHotel;
        console.log(this.hotels)
      }
    }
  }

  constructor(private db : AngularFireDatabase, private ps: HotelDataService)  {}

  ngOnInit(): void {
      this.gethotelList();
      
  }

}


