import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user =>{
      if (!!user){
        this.isAuthenticated = true
      }
      console.log(localStorage.getItem('user'))
    })
   }

   isAuthenticated = false


   logout(){
    this.afAuth.signOut().then(() =>{
       console.log('logged out')
    })
  }

  saveUser(user){
    localStorage.setItem('user',JSON.stringify(user));
  }

  get getUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    return user
  }

  standardSignUp(data){
    return this.afAuth.createUserWithEmailAndPassword(data.email, data.password)
    .then(
      result =>{
        console.log(result)
      }
    ).catch(
      error =>{
        console.log(error.message)
      }
    )
  }

  standardSighIn(data){
    return this.afAuth.signInWithEmailAndPassword(data.email, data.password)
    .then(
      result =>{
        console.log(result)
      }
    ).catch(
      error =>{
        console.log(error.message)
      }
    )

  }

  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
let provider = new firebase.auth.FacebookAuthProvider();
this.afAuth.signInWithPopup(provider).then(
  response=>{
    console.log(response);
    this.saveUser(response.additionalUserInfo.profile)
    console.log(this.getUser)
    resolve(response);
  },
     error => {
    console.log(error)
    reject(error)
    }
   )
  })
 }
}
