import { Injectable } from '@angular/core';
import {GAMES} from './mock-games';
import {Game} from './game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  public getGame(){

  }

  public getById(id: string): Game | undefined{
    return GAMES.find(o => o.id === id);
  }

  public add(game: Game){
    GAMES.push(game);
  }
}
