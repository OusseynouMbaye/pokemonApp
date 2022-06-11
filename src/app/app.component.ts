import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: ` <h1>Welcome to {{ title }}!</h1>
    <ul class="text-class">
      <li *ngFor="let item of pokemonList" (click) ="open(item)">{{ item }}</li>
    </ul>`,
  styles: [
    `.text-class {
      color: red; 
      list-style-type: decimal;}`
  ],
})
export class AppComponent implements OnInit {
  title: string = "Application Pokemon";
  pokemonList: string[] = ["Pikachu", "Bulbasaur", "Charmander", "Squirtle"];
  ngOnInit() {
    console.table(this.pokemonList); 
  }
  open(pokemonName: string) {
    alert(`You clicked on a pokemon ${pokemonName}`);
  }
}
