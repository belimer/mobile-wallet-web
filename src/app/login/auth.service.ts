import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'http://localhost:8092/springboot-rest-api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
 
  login(employeeId: string, password: string) : Observable<any> {
    return this.http.post(URL + '/api/v1/webusers/login', {employeeId,password},httpOptions);
  }
 
}