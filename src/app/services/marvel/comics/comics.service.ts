import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private url = `${environment.marvel.url}/comics`;
  constructor(
    private http: HttpClient,
  ) { }



}
