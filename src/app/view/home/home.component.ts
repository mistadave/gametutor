import { Component, OnInit } from '@angular/core';
import { GAMES } from '../mock-games';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText: string = ''; 
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  searchChangeFn(value: string){
    if (value.length > 2){
      console.log('has more then 2')
    }

  }

}
