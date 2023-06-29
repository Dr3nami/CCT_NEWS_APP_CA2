import { Component } from '@angular/core';
import { NewsArticlesService } from '../api/news-articles.service';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

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


  constructor(private articleService:NewsArticlesService, private router:Router) {
    articleService.getTopHeadline().subscribe((results: ApiReponse ) =>{
      
      this.topHeadlines.push(...results.articles)
      console.log(this.topHeadlines);
      
    })

    articleService.getArticlesByCategory(this.selectedCategory).subscribe((results: ApiReponse) =>{
      console.log((results));
      
    })
  }
getDetails(selectedArticle: any){
const params :NavigationExtras = {
  queryParams:{
    'author': selectedArticle.author,
    'content': selectedArticle.content,
    'description': selectedArticle.description,
    'publishedAt': selectedArticle.publishedAt,
    'source': selectedArticle.source.name,
    'title': selectedArticle.title,
    'url': selectedArticle.url,
    'urlToImage': selectedArticle.urlToImage,
  }
}
this.router.navigate(['/details'],params)

}

}
