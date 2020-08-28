import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-infos-attaque',
  templateUrl: './infos-attaque.page.html',
  styleUrls: ['./infos-attaque.page.scss'],
})
export class InfosAttaquePage implements OnInit {

  lienAttaque: string
  nomAttaque: string
  effets: Object[]
  versions: String[]
  typeAttaque: string


  constructor(public route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
    this.route.params.subscribe((params) => {
      //console.log(params['lienPokemon']);
      this.lienAttaque = params['url']
    });
  }

  getInfoPokemon() {
    this.pokemonService.getInfoAttaque(this.lienAttaque).then((response) => {
      console.log(response)
      this.nomAttaque = response['name']
      this.effets = response['effect_entries']
      //this.versions=response['machines']
      this.typeAttaque = response['type']['name']

      let arrayOfVersion = []
      response['machines'].forEach(element => {
        let temp = element['version_group']['name']
        arrayOfVersion.push(temp)
      });
      console.log(arrayOfVersion)
      this.versions = arrayOfVersion
      //console.log(this.versions)


    })
  }

  async ngOnInit() {
    await this.getInfoPokemon()
  }

}
