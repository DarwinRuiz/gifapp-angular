import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  get recordOfData(): string[] {
    return this.gifsService.record;
  }
  constructor(private gifsService: GifsService) {}

  searchGif(term: string) {
    this.gifsService.requestForApi(term);
  }
}
