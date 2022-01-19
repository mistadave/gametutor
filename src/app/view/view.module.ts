import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ViewRoutingModule } from './view-routing.module';
import { GameComponent } from './game/game.component';



@NgModule({
  declarations: [
    HomeComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
