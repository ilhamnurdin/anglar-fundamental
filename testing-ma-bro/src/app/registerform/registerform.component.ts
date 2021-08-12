import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  regisForm:any;

  constructor() { }

  ngOnInit(): void {
    this.regisForm = new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    });
  }

  SubmitData(){
    console.log(this.regisForm.value);
    if (this.regisForm.valid){
      alert(`Thanks ${this.regisForm.value.firstName} `);
      this.regisForm.reset();//mereset setelah keluar alert
    }
  }

  get firstname(){
    return this.regisForm.get('firstName');
  }
  get lastname(){
    return this.regisForm.get('lastName');
  }
  get email(){
    return this.regisForm.get('email');
  }
  get mobilenumber(){
    return this.regisForm.get('mobileNumber');
  }

}
