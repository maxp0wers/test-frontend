import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = `${environment.apiUrl}/api/drawings/euroJackpot`;

  constructor(private http: HttpClient) { }

  getDrawings(d: Date): Observable<any> {
    const date = this.formatDate(d);
    return this.http.get(`${this.API_URL}/${date}`);
  }

  formatDate(date: Date, sep?: string): string {
    const day = ('0' + (date.getDate() + 1)).slice(-2);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${year}${sep ? sep : ''}${month}${sep ? sep : ''}${day}`;
  }

}
