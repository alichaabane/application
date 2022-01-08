import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../shared/services/api.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  article: any[] = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // importation des articles :
    this.getArticle();
  }

  getArticle(): void {
    this.apiService.getArticles().subscribe(res => {
      this.article = res;
    }, error => {
      console.log(error);
    })
  }

}
