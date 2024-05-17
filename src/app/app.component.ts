import { Component } from '@angular/core';
import { DbzCharacter } from './cards/dbzCard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pruebaTecnica';
  personajesFiltrados: DbzCharacter[] = [];
  filtrarPersonajes(personajes: DbzCharacter[]) {
    this.personajesFiltrados = personajes;
  }

}
