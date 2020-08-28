import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(){
    return this.http.get('https://pokeapi.co/api/v2/pokemon').toPromise()
  }
  getInfoPokemon(lien:string):Promise<object>{
    return this.http.get(lien).toPromise()
  }
  getInfoAttaque(lien:string):Promise<object>{
    return this.http.get(lien).toPromise()
  }
}


