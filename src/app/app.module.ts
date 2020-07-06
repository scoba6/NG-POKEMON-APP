
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}  from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { PokemonsModule} from './pokemons/pokemons.module';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import { FormsModule} from '@angular/forms';
import { LoginComponent} from './login.component';
import { LoginRoutingModule } from './login-routing.module'






import { AppComponent } from './app.component';
//import { BorderCardDirective } from './pokemons/border-card.directive';
//import { PokemonTypeColorPipe} from './pokemons/pokemon-type-color.pipe';
///import { DetailPokemonComponent} from './pokemons/detail-pokemon.component';
//import { ListPokemonComponent} from './pokemons/list-pokemon.component';
import  {PageNotFoundComponent} from './page-not-found.component'
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //BorderCardDirective,
    //PokemonTypeColorPipe,
    //ListPokemonComponent,
    //DetailPokemonComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
    PokemonsModule,
    FormsModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
