import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './CharacterCard.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CharacterCardComponent
  ],
  exports: [
    CharacterCardComponent
  ]
})
export class CardModule { }
