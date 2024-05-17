import { Component, Input, OnInit } from '@angular/core';
import { CardListServiceService } from '../../card-list-service.service';
import { DbzCard, DbzCharacter } from '../../../cards/dbzCard';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  constructor(private dbzService: CardListServiceService) {}
  public listaPersonajes: DbzCharacter[] = [];
  ngOnInit(): void {
    this.buscarPersonajes();
  }

  dbzList: DbzCard[] = [];
  @Input() listaPersonajesFiltro: DbzCharacter[] = [];

  ngOnChanges() {
    this.listaPersonajes = this.listaPersonajesFiltro;
  }

  buscarPersonajes() {
    this.listaPersonajes =  this.dbzService.traerElementos()
  }

  personajesFiltrados: DbzCharacter[] = [];

  filtrarPersonajes(personajes: DbzCharacter[]) {
    this.personajesFiltrados = personajes;
  }
}
