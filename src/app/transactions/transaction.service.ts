import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'http://localhost:8092/springboot-rest-api/';

@Injectable({
  providedIn: 'root'
})
export class 
TransactionService {
  constructor(private http: HttpClient) { }
  
  getTransactions() : Observable<any> {
    return this.http.get(URL + '/api/v1/transactions/');
  }
  searchTransactions(searchWord:string):Observable<any>{
    return this.http.get(URL + '/api/v1/transactions/'+searchWord)
  }
 
}