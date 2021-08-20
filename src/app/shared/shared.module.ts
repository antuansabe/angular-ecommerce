import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    ExponentialPipe,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
