import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class PurchasesService {
  private apiUrl = 'http://localhost:8000/purchases';

  constructor(private http: HttpClient) {}

  getAllPurchases(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  addPurchases(purchases: Game[]): Observable<Game[]> {
    return this.http.post<Game[]>(this.apiUrl, purchases);
  }
}
