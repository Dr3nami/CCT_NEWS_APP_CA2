import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
selectedCategory ='health'
topHeadlines = {}


  constructor(private articleService:NewsArticlesService) {
    articleService.getTopHeadline().subscribe((results) =>{
      
      this.topHeadlines = results.articles
      console.log(this.topHeadlines);
      
    })

    articleService.getArticlesByCategory(this.selectedCategory).subscribe((results) =>{
      console.log((results));
      
    })
  }

}
