import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class NewsArticlesService {

    constructor(private httpClient:HttpClient) { 

  }

getTopHeadline():Observable<any>{
  return this.httpClient.get(
    `${environment.url_base}top-headlines?country=ie&apiKey=${environment.api_key}`
  )
}

getArticlesByCategory(category: string):Observable<any>{
  return this.httpClient.get(
    `${environment.url_base}top-headlines?country=ie&${category}=sport&apiKey=${environment.api_key}`
  )
}
}
