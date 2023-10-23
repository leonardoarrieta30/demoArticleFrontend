import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsultArticlesComponent } from './components/consult-articles/consult-articles.component';
import { ArticleDetailsComponent } from './components/articles-detail/article-details.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {BaseService} from "./shared/services/base.service";
import {ConsultArticlesService} from "./services/consult-articles.service";
import {HttpClientModule} from "@angular/common/http";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatSelectModule} from "@angular/material/select";
import {CategoryComponent} from "./components/category/category.component";
import { WelcomeComponent } from './components/public/welcome/welcome.component';
import { DialogComponent } from './components/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { CreateArticleComponent } from './components/create-article/create-article.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    ConsultArticlesComponent,
    ArticleDetailsComponent,
    NavbarComponent,
    CategoryComponent,
    WelcomeComponent,
    DialogComponent,
    CreateArticleComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule

  ],
  providers: [BaseService, ConsultArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
