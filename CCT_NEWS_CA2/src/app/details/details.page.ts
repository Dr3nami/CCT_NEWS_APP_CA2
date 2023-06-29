import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  author :any
  content :any
  description :any
  publishedAt :any
  url :any
  image :any
  source :any
  title :any

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.author = this.activatedRoute.snapshot.queryParamMap.get('author')
    this.content = this.activatedRoute.snapshot.queryParamMap.get('content')
    this.description = this.activatedRoute.snapshot.queryParamMap.get('description')
    this.publishedAt = this.activatedRoute.snapshot.queryParamMap.get('publishedAt')
    this.url = this.activatedRoute.snapshot.queryParamMap.get('url')
    this.image = this.activatedRoute.snapshot.queryParamMap.get('urlToImage')
    this.source = this.activatedRoute.snapshot.queryParamMap.get('source')
    this.title = this.activatedRoute.snapshot.queryParamMap.get('title')
  }

}
