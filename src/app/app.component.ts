import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons-list";
import { Pokemon } from "./pokemon";
@Component({
  selector: "app-root",
  template: ` <h1> {{ title }}!</h1>
    <ul class="text-class">
      <li *ngFor="let item of pokemonList" (click) ="open(item)">{{ item.types }}</li>
    </ul>`,
  styles: [
    `.text-class {
      color: red; 
      list-style-type: decimal;}`
  ],
})
export class AppComponent implements OnInit {
  title: string = "Pokemon List";
  pokemonList: Pokemon[] = POKEMONS;
  ngOnInit() {
    console.table(this.pokemonList); 
  }
  open(pokemon: Pokemon) {
    alert(`You clicked on a pokemon ${pokemon.name}`);
  }
}
