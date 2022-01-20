import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewRoutingModule } from './view-routing.module';
import { GameComponent } from './game/game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    GameComponent,
    GameDetailComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
