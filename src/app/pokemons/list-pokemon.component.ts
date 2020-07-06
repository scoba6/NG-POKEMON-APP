import { Component, OnInit } from '@angular/core';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';
import { Router } from '@angular/router';
import { PokemonsService} from './pokemons.service';
  
@Component({
    selector: 'list-pokemon',
    templateUrl: './list-pokemon.component.html',
    //providers: [PokemonsService]
})
export class ListPokemonComponent implements OnInit {
  
    pokemons: Pokemon[] = null;
  
    constructor(private router: Router, private pokemonsService: PokemonsService) { }
  
    ngOnInit(): void {
        //this.pokemons = POKEMONS;
        //this.pokemons = this.pokemonsService.getPokemons();
        this.getPokemons();
    }

    getPokemons():void{
        this.pokemonsService.getPokemons()
        .subscribe(pokemons => this.pokemons = pokemons)
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné ' + pokemon.name);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }
  
}