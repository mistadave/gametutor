import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
import { GameLink, IGameLink } from '../game-links';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game: Game | undefined;
  links?: IGameLink[];
  private id: string | undefined;

  constructor(private gameService: GameService,
      private activatedRoute: ActivatedRoute,
      private location: Location) {
    
  }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe(params =>{
      this.id = params['id'];
    });
    
    this.loadGame();
    this.loadLinks();
  }

  back(): void{
    this.location.back();
  }

  private loadGame(){
    if (this.id){
      this.game = this.gameService.getById(this.id);
    }
  }

  private loadLinks() {
    this.links = [];
    for (let i = 0; i <= 10; i++) {
      
      this.links?.push(new GameLink(`Link${i}`, `${i}-game`, `https://www.${i}.in` , i, [`TAG${i}`, `${i}-tag`]));
    }
  }

}
