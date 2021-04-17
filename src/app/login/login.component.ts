import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from '../auth.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private as: AuthService) { 
  }


  loginForm = {
    Email: '',
    password: '',
   }

  ngOnInit(): void {
  }

  logOut(){
    this.as.logout()
  }

  fbAuth(){
    this.as.doFacebookLogin()
 }
 
 standardSighIn(data){
   this.as.standardSighIn(data)
 }

}
