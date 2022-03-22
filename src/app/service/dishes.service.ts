import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dishes} from "../model/Dishes";

@Injectable({
  providedIn: 'root'
})
export class DishesService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {
  }

  getDishes(): Observable<any> {
    return this.http.get<any>(this.API_URL + `/dishes`)
  }

  findById(id: number): Observable<any>{
    console.log("id2--->", id)
    return this.http.get<any>(this.API_URL + `/dishes/${id}`)
  }

  saveDish(dish: Dishes):Observable<any>{
    return this.http.post<any>(this.API_URL + `/dishes/add`, dish);
  }

  editDish(id: number, dish: Dishes): Observable<any>{
    return this.http.put<any>(this.API_URL + `/dishes/edit/${id}`, dish);
  }

  deleteDish(id: number): Observable<any>{
    return this.http.delete<any>(this.API_URL + `/dishes/delete/${id}`)
  }
}
