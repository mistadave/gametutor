import { Component, OnInit } from '@angular/core';
import { GAMES } from '../mock-games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string = ''; 
  games = GAMES;

  constructor() { }

  ngOnInit(): void {
  }

  searchChangeFn(value: string){
    if (value.length > 2){
      console.log('has more then 2')
    }

  }

}
