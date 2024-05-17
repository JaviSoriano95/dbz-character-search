import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './components/card-list/card-list.component';
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from '../cards/CharacterCard/card.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule
  ],
  declarations: [
    CardListComponent,

  ],
  exports: [
    CardListComponent
  ]
})
export class CardListModule { }
