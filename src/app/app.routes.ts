import { Routes } from "@angular/router";
import { ListComponent } from "./pages/pokemon/list/list.component";

export const routes: Routes = [
    {
        path: '', 
        redirectTo: 'pokemons',
        pathMatch: 'full'
    },
    {
        path: 'pokemons',
        component: ListComponent,
        loadChildren: () => import('./pages/pokemon/pokemon.module').then(m => m.PokemonModule)
    }
];