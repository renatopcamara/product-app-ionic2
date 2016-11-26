import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CategoryService {

  baseUri: string

  constructor(private http: Http) {
    this.baseUri = 'https://product-app-ionic-2-renatopcamara.c9users.io/api/category';
  }

  findAll() {
    return new Promise((resolve, reject) => {
      this.http.get(this.baseUri)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }
  
}
