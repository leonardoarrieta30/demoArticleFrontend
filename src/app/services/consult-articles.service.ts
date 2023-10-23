import { Injectable } from '@angular/core';
import {BaseService} from "../shared/services/base.service";
import {Article} from "../model/article";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultArticlesService extends BaseService<Article>{

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'https://demoarticle-production.up.railway.app/api/v1/articles';
  }
}
