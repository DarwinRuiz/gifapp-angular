import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css'],
})
export class SearchGifsComponent {
  @ViewChild('textSearch') textSearch!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const valueOfInput = this.textSearch.nativeElement.value;
    this.gifsService.searchGifs(valueOfInput);
    this.textSearch.nativeElement.value = '';
  }
}
