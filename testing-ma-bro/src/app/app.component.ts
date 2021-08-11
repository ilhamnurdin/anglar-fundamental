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
  kumpulanString = ['item 1', 'item 2', 'item 3', 'item 4'];

  ketikaDiKlik() {
    this.kumpulanAngka.push(this.kumpulanAngka.length+1);
    this.kumpulanString.push("item "+(this.kumpulanString.length+1));
  }

  username:string = 'Bayufajar';

  apakahTampil:boolean = false;
}
