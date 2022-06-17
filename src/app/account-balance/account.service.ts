import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8092/springboot-rest-api/';

@Injectable({
  providedIn: 'root'
})
export class 
AccountService {
  constructor(private http: HttpClient) { }
  
  findAccount(searchWord:string):Observable<any>{
    return this.http.get(AUTH_API + '/api/v1/accounts/'+searchWord)
  }
 
}