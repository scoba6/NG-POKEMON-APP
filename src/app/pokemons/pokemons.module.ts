import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonRoutingModule} from './pokemons-routing.module';
import { ListPokemonComponent } from './list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { PokemonsService} from './pokemons.service';
import { LoaderComponent} from '../loader.component';
import { AuthGuard } from '../auth-guard.service';

import { FormsModule} from '@angular/forms';
import { AddPokemonComponent } from './add-pokemon.component'
import { EditPokemonComponent } from './edit-pokemon.component';
import { PokemonFormComponent } from './pokemon-form.component';
import { PokemonSearchComponent } from './search-pokemon.component';



  
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
        
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        PokemonSearchComponent,
        LoaderComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
        
    ],
    providers: [PokemonsService, AuthGuard]
})
export class PokemonsModule { }