import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: "root"
})
export class DataService {
  url = "https://jsonplaceholder.typicode.com/users/";
  constructor(private http: HttpClient) {}

  getPokemons() {
    return this.http.get(this.url);
  }

  getPokemon(name) {
    return this.http.get(this.url + name);
  }
  Postdata(name,email){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email: email
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
  console.log("Data berhasil di POST ");
  }
}
