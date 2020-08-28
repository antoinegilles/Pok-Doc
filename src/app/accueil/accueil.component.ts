import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
})
export class AccueilComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemons: Object[]

  async getPokemons() {
    await this.pokemonService.getPokemons().then((response) => {
      console.log(response)
      this.pokemons = response['results']
    })
  }
  ngOnInit() {
    this.getPokemons()
  }

}
