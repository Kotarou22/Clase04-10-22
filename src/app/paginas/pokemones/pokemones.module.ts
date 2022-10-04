import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//Navegacion
import { RouterModule } from '@angular/router';
//Hacer peticiones a internet
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { PokemonesPageRoutingModule } from './pokemones-routing.module';

import { PokemonesPage } from './pokemones.page';
import { InfoPokemonComponent } from './componentes/info-pokemon/info-pokemon.component';
import { ObtenerPokemonService } from './servicios/obtener-pokemon.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PokemonesPageRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PokemonesPage, InfoPokemonComponent],
  providers: [
    ObtenerPokemonService
  ]
})
export class PokemonesPageModule {}
