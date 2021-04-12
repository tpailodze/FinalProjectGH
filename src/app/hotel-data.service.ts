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

//  getInfoList(){
//   this.db.getInfolist().snapshotChanges().pipe(
//     map(data=>{
//      return data.map((info=> ({
//        key:info.key, ...(info.payload.val() as {} ),
//      })))
//    })
//   ).subscribe(data=>{

    
//    this.hotel = data;
//    console.log(this.hotel)
//   });
// }
}
