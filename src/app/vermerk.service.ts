import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Car } from './model/car';
import { Vermerk } from './model/vermerk';

// Token
export abstract class VermerkService {
  abstract find(from: string, to: string): Observable<Car[]>;
  abstract findVermerke(from: string, to: string): Observable<Vermerk[]>;
}



@Injectable()
export class DefaultVermerkService implements VermerkService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Car[]> {
    const url = 'http://localhost:8080/cars';
    const params = new HttpParams();//.set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accepted', 'application/json');

    return this.http.get<Car[]>(url, { params, headers });
  }

  findVermerke(from: string, to: string): Observable<Vermerk[]> {
    const url = 'http://localhost:8080/vermerke';
    const params = new HttpParams();//.set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accepted', 'application/json');

    return this.http.get<Vermerk[]>(url, { params, headers });
  }

}



@Injectable()
export class DummyVermerkService implements VermerkService {

  find(from: string, to: string): Observable<Car[]> {
    return of([
      { vin: 'abcd', year: '1980', brand: 'Opel', color: 'blue'},
      { vin: 'sdfdsf', year: '1982', brand: 'VW', color: 'red'},
  
    ]);
  }

  findVermerke(from: string, to: string): Observable<Vermerk[]> {
    return of([
      { id: 'abcd', rechtstraegerId: '1980', rechtstraegerName: 'Opel', beschreibung: 'blue'}
    ]);
  }

  
} 