import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { 

    
  }
  searchByTitle(title:any):Observable<any> {
  
    
    return this.http.get(`http://www.omdbapi.com/?s=${title}&page=1&apikey=93bca4d2`)
        
  }
}
