import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable}  from 'rxjs'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  title: 'firebase';

  hotel= {
    name: '',
    country: '',
    price: '',
    roomType: '',

  }

  hotels: Observable<any[]>

  constructor(private db:AngularFireDatabase) {
    this.hotels = db.list('hotelData').valueChanges();
    this.hotels.subscribe(data => {
      console.log(data)
    })
   }

   addHotel(){
     this.db.list('hotelData').push(this.hotel)
     this.hotel.name = '';
     this.hotel.country = '';
     this.hotel.price = ''
  }

  ngOnInit(): void {
  }

}
