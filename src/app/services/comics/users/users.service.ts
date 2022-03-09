import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = `${environment.comics.url}/users`

  constructor(
    private http: HttpClient,
  ) { }

  getComics(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

}
