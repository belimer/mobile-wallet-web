import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'http://localhost:8092/springboot-rest-api/';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  
  getCustomers() : Observable<any> {
    console.log("Heyy");
    return this.http.get(URL + '/api/v1/customers/');
  }
 
}