import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGifsComponent } from './search-gifs/search-gifs.component';
import { DisplayGifsComponent } from './display-gifs/display-gifs.component';


@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGifsComponent,
    DisplayGifsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
