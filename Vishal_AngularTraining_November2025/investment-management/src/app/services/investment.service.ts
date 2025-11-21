import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from '../models/investment';

@Injectable({
  providedIn: 'root'
})

export class InvestmentService {
  private apiUrl = 'http://localhost:3000/investments';

  constructor(private http: HttpClient) { }

  getInvestments(): Observable<Investment[]>{
    return this.http.get<Investment[]>(this.apiUrl);
  }

  getInvestmentById(id: number): Observable<Investment>{
    return this.http.get<Investment>(`${this.apiUrl}/${id}`);
  }

  addInvestment(investment: Investment): Observable<Investment> {
    return this.http.post<Investment>(this.apiUrl, investment);
  }

  updateInvestment(investment: Investment): Observable<Investment>{
    return this.http.put<Investment>(`${this.apiUrl}/${investment.id}`, investment);
  }

  deleteInvestment(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
