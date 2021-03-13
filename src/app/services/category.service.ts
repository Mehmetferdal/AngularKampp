import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiUrl = 'https://localhost:44319/api/categorys/getall';
  constructor(private httpClient: HttpClient) { }
  getCategories():Observable<ListResponseModel<Category>> {
    return this.httpClient
      .get<ListResponseModel<Category>>(this.apiUrl);

  }
}
