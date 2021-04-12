import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable}  from 'rxjs';
import {HotelDataService} from '../hotel-data.service';
import {map} from 'rxjs/operators';
import {AngularFireStorage} from "@angular/fire/storage"



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  path: string

  constructor( private db: HotelDataService, private af: AngularFireStorage) {
  }
  upload($event){
    this.path =$event.target.files[0]

  }

  uploadImage(){
    console.log(this.path)
     this.af.upload("/files"+Math.random()+this.path,this.path)
  }

 

  ngOnInit(): void {
  }
  
  hotel = {
    hotelName: "",
    hotelCountry: "",
    stars: "",
    roomType: "",
    description: ""
  }

  addHotel(){
    this.db.addHotel(this.hotel);
    this.hotel.hotelName="";
    this.hotel.hotelCountry="";
    this.hotel.stars="";
    this.hotel.roomType="";
    this.hotel.description=""
  }

  hotels = [];

   getInfoList(){
     this.db.getInfolist().snapshotChanges().pipe(
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
}