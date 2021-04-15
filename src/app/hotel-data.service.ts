import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable}  from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HotelDataService {

   private dbpath = '/finalprojectfb';

   hotelRef: AngularFireList<any> = null;

   getInfolist(){
     return this.hotelRef
   }

  constructor(private db:AngularFireDatabase) { 
    this.hotelRef = db.list(this.dbpath)
    
   }

 addHotel(hotelObject){
   this.db.list(this.dbpath).push(hotelObject)
 }

 removeHotel(hotelId){
   this.db.list(this.dbpath).remove(hotelId)
 }

 updateHote(hotelObject){
 this.db.list(this.dbpath).update(hotelObject.od, hotelObject)
 }

 getHotel(hotelkey){
   return this.db.object(this.dbpath + '/'+ hotelkey)

 }

}
