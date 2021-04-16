import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private afAuth: AngularFireAuth) { }

  loginForm = this.formBuilder.group({
    Name: [''],
    password: [''],
   })

  ngOnInit(): void {
  }

  doFacebookLogin(){
    return new Promise<any>((resolve, reject) => {
let provider = new firebase.auth.FacebookAuthProvider();
this.afAuth.signInWithPopup(provider).then(
  response=>{
    console.log(response);
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
