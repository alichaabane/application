import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly API = environment.publicApi;

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<any[]>(this.API + '/articles/all');
  }


}
