import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ini Title ma bro';
  namaDepan = 'ashiap';
  namaBelakang:string='sampah';
  umur:number=100;
  kumpulanAngka = [0,1,2,3];

  ketikaDiKlik() {
    this.namaDepan = 'AHHA',
    this.namaBelakang = 'Sampah sodara-sodara',
    this.umur = 120
  }

  username:string = 'Bayufajar';
}
