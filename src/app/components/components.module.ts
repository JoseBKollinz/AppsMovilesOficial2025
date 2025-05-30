import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { DateComponent } from './date/date.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DateComponent
  ],
  exports: [
    HeaderComponent,
    DateComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
