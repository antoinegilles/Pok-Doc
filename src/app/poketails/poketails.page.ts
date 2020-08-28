import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from "../pokemon.service";

@Component({
  selector: 'app-poketails',
  templateUrl: './poketails.page.html',
  styleUrls: ['./poketails.page.scss'],
})
export class PoketailsPage implements OnInit {
  
  lienPokemon:string
  infosPokemon:Object = {
    abilities:null
  }
  image1:Object
  image2:Object
  image3:Object
  moves:Object
  attaqueSelected:string
  

  constructor(public route: ActivatedRoute,private router: Router, private pokemonService:PokemonService) {
    this.route.params.subscribe((params) => {
      //console.log(params['lienPokemon']);
      this.lienPokemon= params['lienPokemon']
    });
  }

   getInfoPokemon() {
     this.pokemonService.getInfoPokemon(this.lienPokemon).then((response)=>{
       this.infosPokemon = response;
       this.image1 = response['sprites']['back_default']
       this.image2 = response['sprites']['front_shiny']
       this.image3 = response['sprites']['front_default']
       this.moves = response['moves']
       console.log(this.infosPokemon)
       
    })
  }

  searchAttack(){
    console.log(this.attaqueSelected)
    this.router.navigate(['/infos-attaque', this.attaqueSelected])
  }
 async ngOnInit() {
   await this.getInfoPokemon()
  }

}
