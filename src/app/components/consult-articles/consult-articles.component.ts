import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

import {ConsultArticlesService} from "../../services/consult-articles.service";
import {Router} from "@angular/router";
import {Article} from "../../model/article";
import {MatSelectChange} from "@angular/material/select";
import {Category} from "../../model/category";
import {CategoriesService} from "../../services/categories.service";
import {MatDialog} from "@angular/material/dialog";
import {CreateArticleComponent} from "../create-article/create-article.component";



@Component({
  selector: 'app-consult-articles',
  templateUrl: './consult-articles.component.html',
  styleUrls: ['./consult-articles.component.css']
})
export class ConsultArticlesComponent implements OnInit {
  positionOptions: any[] = [];
  position = new FormControl(this.positionOptions[0]);
  categories: Category[] = [];
  categoryId: number = 0;
  articles: Article[] = [];
  originals: Article[]= [];
  newCategoryName: string = "";

  constructor(
    private consultArticlesService: ConsultArticlesService,
    private categoriesService: CategoriesService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllArticles()
      .then(() => this.getCategories())
      .then(() => this.addCategoryTheArray());
  }

  async getAllArticles() {
    const response: any = await this.consultArticlesService.getAll().toPromise();
    this.articles = response.content;
    this.originals = response.content;
  }

  async getCategories() {
    const response: any = await this.categoriesService.getAll().toPromise();
    this.categories = response.content;
  }

  addCategoryTheArray() {
    for (let i = 0; i < this.categories.length; i++) {
      this.positionOptions.push(this.categories[i].name);
    }
  }

  onCategorySelectionChange(event: MatSelectChange) {
    for (let i= 0; i< this.categories.length; i++){
      if(event.value == this.categories[i].name){
        this.categoryId = this.categories[i].id;
      }
    }

    if (this.categoryId) {
      this.getArticlesByCategoryId(this.categoryId);
    } else {
      this.getAllArticles();
    }

  }

  getArticlesByCategoryId(categoryId: number){
    this.consultArticlesService.getArticlesByCategoryId(categoryId).subscribe((response: any) => {
      this.articles = response.content;
    })
  }

  deleteArticle(id: any){
    this.consultArticlesService.delete(id).subscribe( (response) => {
      console.log(`Article deleted with id: ${id}`);
      this.getAllArticles();
    });

  }

  viewDetails(articleId: number) {
    this.router.navigate([`/article-details/${articleId}`]);
  }


  getArticlesByName(name: string){
    if(name?.length) {
      this.articles = this.articles.filter(article => {
        return article.name.toLowerCase().includes(name.toLowerCase()) ||
          article.name.toLowerCase().includes(name.toLowerCase());
      });
    }
    else{
      this.getAllArticles();
    }
  }

  openCreateArticleDialog() {
    const dialogRef = this.dialog.open(CreateArticleComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.getAllArticles();
      }
    });

  }

}
