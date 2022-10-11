import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './../../modelo/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {
  public url!: string;
  public pokemon!: Pokemon;

  constructor(
    private activeRouter: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
    this.activeRouter.params.subscribe(parametros =>{
      this.url = parametros.nombrePokemon;
      console.log(parametros)
    });
    this.httpClient.get<Pokemon>(this.url).subscribe(resultado =>{
      this.pokemon = resultado;
      console.log(resultado)
    })
  }
}
