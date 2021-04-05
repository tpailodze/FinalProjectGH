import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
   firstName: [''],
   lastName: [''],
   password: [''],
   dob: [''],
   gender: ['']
  })

  saveform(){
    console.log(this.profileForm.value)
  }

  ngOnInit(): void {
  }

}
