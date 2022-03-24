import { Observable } from "rxjs"
import { Pokemon } from "./pokemon.model";
import { BaseAsync } from "./resource-list.model";

export interface PokemonList extends BaseAsync<Pokemon> {

}