import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private as: AuthService) { }

  profileForm = {
   Email: '',
   Password: '',
   
  }



  ngOnInit(): void {
  }

  register(){
    this.as.standardSignUp(this.profileForm)
  }

}
