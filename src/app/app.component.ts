/*import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hello, {{name}} !</h1>`,
})
export class AppComponent {
  name = 'Angular';
}*/

import { Component} from '@angular/core'; 
//import { Pokemon } from './pokemons/pokemon'; 
//import { POKEMONS } from './pokemons/mock-pokemons'; 

//import {BorderCardDirective} from './border-card.directive';

@Component({ 
 selector: 'app-root', 
 templateUrl: `./app.component.html`
}) 

export class AppComponent {

}

//export class AppComponent implements OnInit {
  //pokemons: Pokemon[] = null;
  //public title: string = "Mes Pokemons";
  //public value: string = '';
  //age= 15;
/*
  ngOnInit() { 
    this.pokemons = POKEMONS; 
  } */

  /*selectPokemon(pokemon: Pokemon) { 
    console.log('Vous avez selectionné ' + pokemon.name); 
    //alert('Vous avez cliqué ' + pokemon.name);
  }*/

 /* onClick(){
    console.log('Clique')
    //alert("Clic")
  }*/

 /* onKey(event:KeyboardEvent){
    this.value = 'Bonjour '+ (<HTMLInputElement>event.target).value;
  }*/
  /*
  onKey(value:string){
    this.value = 'Bonjour '+ value;
  }*/




//}


