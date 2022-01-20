import { Component, OnInit } from '@angular/core';
import { GAMES } from '../mock-games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games = GAMES;

  constructor() { }

  ngOnInit(): void {
  }

}
