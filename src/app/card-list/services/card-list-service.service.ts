import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DbzCard, DbzCharacter } from '../../cards/dbzCard';
import { Observable, catchError, debounceTime, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardListServiceService {
  private API = 'https://dragonball-api.com/api/characters';
  public dbzCharacters: DbzCard[] = [];
  public listaPersonajesCopy: DbzCharacter[] = [];
  public firstTime: boolean = true;

  constructor(private http: HttpClient) {}

  traerElementos(): DbzCharacter[] {

if(this.firstTime){

  if(localStorage.getItem('dbzCharacters')){
    this.firstTime=false
    return JSON.parse(localStorage.getItem('dbzCharacters')!) as DbzCharacter[];
  }
}
    const url = this.API + '?limit=58';
    let listaPersonajes: DbzCharacter[] = [];
    this.http
      .get<DbzCard>(url)
      .pipe(debounceTime(2000))
      .subscribe((resp: DbzCard) => {
        resp.items.forEach((character) => {
          if (character.name != 'Dodoria') {
            listaPersonajes.push(character);
          }
        });
      });
    this.listaPersonajesCopy = listaPersonajes;
    return listaPersonajes;
  }

  buscarFiltro(filtro: string): DbzCharacter[] {
    let listaPersonajes: DbzCharacter[] = [];
    if (filtro === '') return this.listaPersonajesCopy;
    this.http
      .get<DbzCard>(this.API + `?name=${filtro}`)
      .pipe(debounceTime(2000))
      .subscribe((resp: DbzCard) => {
        console.log(resp);
        if (resp && Array.isArray(resp)) {
          resp.forEach((character) => {
            if (character.name != 'Dodoria') {
              listaPersonajes.push(character);
              console.log(listaPersonajes);
            }
          });
        }
        localStorage.setItem('dbzCharacters', JSON.stringify(listaPersonajes));
      });



    return listaPersonajes;
  }
}
