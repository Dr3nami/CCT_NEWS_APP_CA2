import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';

interface ApiReponse {
  articles: Article[];
}

interface Article {
  
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
selectedCategory ='health'
topHeadlines: Article[] = [];


  constructor(private articleService:NewsArticlesService) {
    articleService.getTopHeadline().subscribe((results: ApiReponse ) =>{
      
      this.topHeadlines.push(...results.articles)
      console.log(this.topHeadlines);
      
    })

    articleService.getArticlesByCategory(this.selectedCategory).subscribe((results: ApiReponse) =>{
      console.log((results));
      
    })
  }

}
