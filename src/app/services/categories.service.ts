import { Injectable } from '@angular/core';
import {BaseService} from "../shared/services/base.service";
import {Category} from "../model/category";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService<Category>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:8080/api/v1/categories';
  }
}
