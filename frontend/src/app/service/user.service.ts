import { ConfigService } from './config.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiURL:string = `${this.config.apiUrl}users`;
  httpOptions: HttpHeaders = new HttpHeaders({
    'content-type': 'application/json'
  });

  constructor(
    private config:ConfigService,
    private http:HttpClient
  ) { }

  getAll():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiURL}`);
  };
  
}
