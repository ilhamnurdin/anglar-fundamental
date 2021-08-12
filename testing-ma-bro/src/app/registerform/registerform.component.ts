import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

  regisForm:any;

  Arry = ['a','b','c'];
  Arry2 = [
    {id: 1, name: "Hardik" },
    {id: 2, name: "Vimal" },
    {id: 3, name: "Paresh" }
  ];


  constructor() { }

  ngOnInit(): void {
    this.regisForm = new FormGroup({
      "firstName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "lastName":new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z]*')]),
      "email":new FormControl(null,[Validators.required,Validators.email]),
      "mobileNumber":new FormControl(null,[Validators.required,Validators.pattern('[0-9]*')])
    });

    console.log(this.Arry)
    let index = this.Arry.indexOf('a');
    console.log(index)//menampilakn indeks ke berapa

    let index2dimensi = this.Arry2.findIndex(x=>x.id == 3);
    console.log(index2dimensi)//menampilakn indeks ke berapa
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




  updateItem(item){
    let index = this.Arry2.indexOf(item);
    item.name = "Terupdate";
    this.Arry2[index] = item;

    console.log(this.Arry2);
  }
}
