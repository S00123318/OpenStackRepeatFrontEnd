import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postMovie(data : any){
    return this.http.post<any>("http://localhost:3000/movieList/", data);
  }
  getMovie(){
    return this.http.get<any>("http://localhost:3000/movieList/");
  }

  putMovie(data: any, id : number){
    return this.http.put<any>("http://localhost:3000/movieList/"+id, data);
  }

  deleteMovie(id : number){
    return this.http.delete<any>("http://localhost:3000/movieList/"+id);
  }

  login(email: string, password: string) {
    return this.http.post('login', { email, password });
  }
}
