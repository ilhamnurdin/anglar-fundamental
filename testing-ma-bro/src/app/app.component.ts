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

  teams:string[] = ['England', 'Portugal', 'Indonesia'];
  players:string[] = [];
  englandPlayers:string[] = ['Sterling','Jack Grealish','Hary Keane'];
  portugalPlayers:string[] = ['CR7','Pepe','Queresma'];
  indonesiaPlayers:string[] = ['Asnawi Mangkualam','Syamsul Chaerudin','Bambang Pamungkas'];
  updatePlayers(teamName){
    switch(teamName){
      case'England':
      this.players = this.englandPlayers;
      break;
      case'Portugal':
      this.players = this.portugalPlayers;
      break;
      case'Indonesia':
      this.players = this.indonesiaPlayers;
      break;
    }
  }
}



