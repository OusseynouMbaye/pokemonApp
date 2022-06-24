import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons-list";
import { Pokemon } from "./pokemon";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: [`./app-component.css`],
})
export class AppComponent implements OnInit {
  title: string = "Pokemon List";
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemonList);
    // this.pokemonSelected;
  }

  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon | undefined = this.pokemonList.find(
      (pokemon) => pokemon.id == +pokemonId
    );

    if (pokemon) {
      console.log(`Vous avez demande le pokemon ${pokemon.name}`);
      this.pokemonSelected = pokemon;
    } else {
      console.log(`Le pokemon demande n'existe pas`);
      this.pokemonSelected = pokemon;
    }
  }
}
