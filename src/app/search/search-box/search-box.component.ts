import { Component, EventEmitter, Output } from '@angular/core';
import { CardListServiceService } from '../../card-list/services/card-list-service.service';
import { DbzCard, DbzCharacter } from '../../cards/dbzCard';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {

  @Output()
  filtro = new EventEmitter<DbzCharacter[]>();
  listaPersonajes: DbzCharacter[] = [];

  constructor(private dbzService: CardListServiceService ){}

  buscar(e: any) {
    const search = e.target.value;
    const capitalizedSearch = search.charAt(0).toUpperCase() + search.slice(1);
    let listaPersonajes: DbzCharacter[] = [];
    listaPersonajes = this.dbzService.buscarFiltro(capitalizedSearch);

    this.filtro.emit(listaPersonajes);


  }

  reset(input: HTMLInputElement) {

    let listaPersonajes: DbzCharacter[] = [];
    listaPersonajes = this.dbzService.traerElementos();
    this.filtro.emit(listaPersonajes);
    input.value = '';
  }


}
