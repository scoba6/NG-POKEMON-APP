import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable}  from 'rxjs/Observable';
import { catchError, tap} from 'rxjs/operators';
import { of } from 'rxjs';

  
@Injectable()
export class PokemonsService {

    constructor(private http: HttpClient) {

    }

    private pokemonsUrl = 'api/pokemons';

    private log (log:string){
      console.info(log);
    }

    private handleError<T> (operation = 'operation', result?:T){
      return (error:any) : Observable<T> => {
        console.log(error);
        console.log(`${operation} failed: ${error.message}`);

        return of (result as T);
      }
  
    }
    
    // Retourne tous les pokémons
    /*getPokemons(): Pokemon[] {
      return POKEMONS;
    }*/

    getPokemons(): Observable <Pokemon[]>{
      return  this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
        tap(_ => this.log('fetched pokemons')),
        catchError(this.handleError('getPokemons', []))
      );
      
    }
      
    // Retourne le pokémon avec l'identifiant passé en paramètre
    /*getPokemon(id: number): Pokemon {
      let pokemons = this.getPokemons();
      
      for(let index = 0; index < pokemons.length; index++) {
        if(id === pokemons[index].id) {
          return pokemons[index];
        }
      }
    }*/
    //add 
    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
  
      return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions).pipe(
        tap((pokemon: Pokemon) => this.log(`added pokemon with id=${pokemon.id}`)),
        catchError(this.handleError<Pokemon>('addPokemon'))
      );
    }

    getPokemon(id:number){
      const url = `${this.pokemonsUrl}/${id}`;
      return this.http.get<Pokemon>(url).pipe(
        tap(_=> this.log(`fetched pokemon id=${id}`)),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
      const httpOptions = {
        headers: new HttpHeaders({'Content-type': 'application/json'})
     };

      return this.http.put(this.pokemonsUrl,pokemon, httpOptions).pipe(
        tap(_=> this.log(`updated pokemon id=${pokemon.id}`)),
        catchError(this.handleError<any>(`UpdatedPokemon`))
      );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
      const httpOptions = {
        headers: new HttpHeaders({'Content-type': 'application/json'})
     };

      return this.http.put(this.pokemonsUrl,pokemon, httpOptions).pipe(
        tap(_=> this.log(`deleted pokemon  id=${pokemon.id}`)),
        catchError(this.handleError<any>(`DeletedPokemon`))
      );
    }

    searchPokemons(term:string): Observable<Pokemon[]> {
      if (!term.trim()){
        return of ([]);
      }

      return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
        tap(_=> this.log(`found pokemon matching in ${term}`)),
        catchError(this.handleError<Pokemon[]>('SearchPokemon', []))
      );
    }

    
    //Type pokemeons
    getPokemonTypes(): string[]{
      return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrick', 'Poison', 'Fée', 'Vol'];

    }

  





}