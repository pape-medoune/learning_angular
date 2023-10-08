import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './moke-pokemon-list';
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`Liste de Pokemons`,
})

export class AppComponent implements OnInit{
  title = 'exercice';
  PokemonList= POKEMONS; //Pokemon:Pokemon[]=POKEMONS
  ngOnInit(): void {
    console.table(this.PokemonList);
  }
}
