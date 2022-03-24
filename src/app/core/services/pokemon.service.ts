import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Pokemon, PokemonList } from "../models";
import { ResourceSet } from "../models/resource-list.model";

@Injectable()
export class PokemonService {

    private api = 'https://pokeapi.co/api/v2/';

    constructor(
        private http: HttpClient
    ) {

    }

    public getLists(): Observable<ResourceSet<PokemonList>> {
        return this.http.get<ResourceSet<PokemonList>>(`${this.api}pokemon/?limit=300&offset=0`)
    }

    public getDetailOfPokemon(request: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(request);
    }
}