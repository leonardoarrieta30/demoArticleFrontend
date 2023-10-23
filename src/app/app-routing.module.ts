import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArticleDetailsComponent} from "./components/articles-detail/article-details.component";
import {ConsultArticlesComponent} from "./components/consult-articles/consult-articles.component";
import {CategoryComponent} from "./components/category/category.component";
import {WelcomeComponent} from "./components/public/welcome/welcome.component";
import {CreateArticleComponent} from "./components/create-article/create-article.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {path:'article-details/:id', component: ArticleDetailsComponent},
  {path:'articles-consult', component: ConsultArticlesComponent},
  {path:'create-category', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
