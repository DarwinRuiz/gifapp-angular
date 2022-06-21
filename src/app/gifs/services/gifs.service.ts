import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _record: string[] = [];
  private apiKey: string = 'LXBgjGWdoZUMy7k8y2JipoHRMWO8vpZ8';
  private url: string = 'https://api.giphy.com/v1/gifs';
  public results: Gif[] = [];

  constructor(private http: HttpClient) {
    this._record = JSON.parse(localStorage.getItem('history')!) || [];

    this.results = JSON.parse(localStorage.getItem('lastResult')!) || [];
  }

  get record(): string[] {
    return [...this._record];
  }

  searchGifs(query: string): void {
    const processedQuery = query.trim().toUpperCase();

    if (processedQuery === '') {
      return;
    }

    if (this._record.includes(processedQuery)) {
      return;
    }

    if (this._record.length === 10) {
      this._record.pop();
      this._record.unshift(processedQuery);
      localStorage.setItem('history', JSON.stringify(this._record));
    } else {
      this._record.unshift(processedQuery);
      localStorage.setItem('history', JSON.stringify(this._record));
    }

    this.requestForApi(processedQuery);
  }

  requestForApi(valueOfSearch: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '12')
      .set('q', valueOfSearch);

    this.http
      .get<SearchGifsResponse>(`${this.url}/search`, { params })
      .subscribe((resp) => {
        this.results = resp.data;
        localStorage.setItem('lastResult', JSON.stringify(this.results));
      });
  }
}
