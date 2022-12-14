import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PokemonPageRoutingModule } from './pokemon-routing.module';

import { PokemonPage } from './pokemon.page';

import { PokemonesPageModule } from '../pokemones/pokemones.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokemonPageRoutingModule,
    HttpClientModule,
    PokemonesPageModule
  ],
  declarations: [PokemonPage]
})
export class PokemonPageModule {}
