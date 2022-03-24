import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { PokemonList } from 'src/app/core/models';
import { PokemonService } from 'src/app/core/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public pagination: {
    count: number,
    next: string,
    previous: string
  } = {} as any
  public pokemonList: PokemonList[] = []
  private unsubscribe$ = new Subject<void>();

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemonService.getLists()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(resp => {
        this.pagination = {...resp}
        this.pokemonList.push(...resp.results.map(r => {
          return {
            name: r.name,
            url: r.url,
            detail: this.pokemonService.getDetailOfPokemon(r.url)
          }
        }))
      })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next()
    this.unsubscribe$.complete()
  }

  // public getDetailOfPokemon(url: string) {
  //   this.pokemonService.getDetailOfPokemon(url)
  //     .pipe(take(1))
  //     .subscribe(resp => console.log(resp))
  // }
}
