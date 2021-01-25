import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../modal/Book';
import { Image } from '../modal/Image';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<Image[]>('https://sumukh-barclays.herokuapp.com/getAllImages');
 
  }


  getBooks() {
    return this.http.get<Book[]>('https://sumukh-barclays.herokuapp.com/get');
 
  }

  // getProducts=()=>{
  //   return this.http.get<Book[]>('http://localhost:8080/get');
  // }

  getProducts=()=>{
    return this.http.get<Book[]>('https://sumukh-barclays.herokuapp.com/get');
  }

  authenticationService = (username: String, password: String) =>{
    return this.http.get('./assets/products.json');
  }


}
