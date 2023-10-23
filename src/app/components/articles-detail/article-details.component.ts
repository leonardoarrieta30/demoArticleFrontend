import {Component, OnInit} from '@angular/core';
import {ConsultArticlesService} from "../../services/consult-articles.service";
import {Article} from "../../model/article";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";

@Component({
  selector: 'app-articles-detail',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{
  article!: Article;
  articleId!: any;
  constructor(private consultArticlesService: ConsultArticlesService, private route: ActivatedRoute, private dialog: MatDialog) {
    this.route.params.subscribe(params => {
      this.articleId = +params['id'];
    });
  }

  ngOnInit(): void {
      this.getArticleById(this.articleId);
  }

  getArticleById(id: number){
    this.consultArticlesService.getById(id).subscribe((response) =>{
        this.article = response;
    })
  }

  formData: any = {};
  openDialog(articleId: number, article: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: { articleId, article }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result: ', result);
    });
  }


}
