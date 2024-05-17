import { Component, Input, OnInit } from '@angular/core';
import { DbzCharacter } from '../dbzCard';

@Component({
  selector: 'characterCard',
  templateUrl: './CharacterCard.component.html',
  styleUrls: ['./CharacterCard.component.css']
})
export class CharacterCardComponent implements OnInit {

  @Input() personaje!:DbzCharacter;
  constructor() { }

  ngOnInit() {
  }

}
