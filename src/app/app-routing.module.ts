import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { PageNotFoundComponent } from  './page-not-found.component';
  
// routes
const appRoutes: Routes = [
    //{ path: 'pokemons', component: ListPokemonComponent },
   // { path: 'pokemon/:id', component: DetailPokemonComponent },
    { path: '', redirectTo: 'pokemon/all', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
]
  
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }