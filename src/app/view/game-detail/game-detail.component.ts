import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game: Game | undefined;
  links?: string[];
  constructor(private gameService: GameService,
      private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    let id: string | undefined;
    this.activatedRoute.params.subscribe(params =>{
      id = params['id'];
    });
    if (id){
      this.game = this.gameService.getById(id);
    }
    this.links = [];
    for (let i = 0; i <= 10; i++) {
      this.links?.push(`Item ${i}`);
    }

  }

  private loadGame(){

  }

  private loadLinks() {

  }

}
