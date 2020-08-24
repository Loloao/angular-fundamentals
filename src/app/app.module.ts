import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { EndComponent } from './end/end.component';
import { GameComponent } from './game/game.component';
import { ControlsComponent } from './controls/controls.component';
import { ConstantsService } from './_services/constants.service';

@NgModule({
  declarations: [
    HomeComponent,
    StartComponent,
    EndComponent,
    GameComponent,
    ControlsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConstantsService],
  bootstrap: [HomeComponent],
})
export class AppModule {}
