import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons-list";
import { Pokemon } from "./pokemon";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styles: [
    `
      .pokemon-grid {
        color: red;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 10px;
        justify-items: center;
      }
      .title-pokemon {
        text-align: center;
      }
      .pokemon-img {
        display: flex;
        justify-content: center;
      }
      .pokemon-card {
        background: beige;
        min-width: 100%;
      }
      .pokemon-div{
        
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  title: string = "Pokemon List";
  pokemonList: Pokemon[] = POKEMONS;
  ngOnInit() {
    console.table(this.pokemonList);
  }
  selectPokemon(event: MouseEvent) {
    const index: number = +(event.target as HTMLInputElement).value;
    alert(`You clicked on a pokemon ${this.pokemonList[index].name}`);
  }
}
