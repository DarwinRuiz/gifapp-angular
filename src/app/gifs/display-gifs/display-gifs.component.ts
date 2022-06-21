import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-display-gifs',
  templateUrl: './display-gifs.component.html',
  styleUrls: ['./display-gifs.component.css']
})
export class DisplayGifsComponent {

  get results() {
    return this.gifsService.results;
  }

  constructor(private gifsService: GifsService) {}
}
