import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {ConsultArticlesService} from "../../services/consult-articles.service";
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit{
  articleForm: FormGroup;
  categories: Category[]=[];
  constructor(
    private dialogRef: MatDialogRef<CreateArticleComponent>,
    private fb: FormBuilder,
    private consultArticleService: ConsultArticlesService,
    private categoryService: CategoriesService,
  ) {
    this.articleForm = this.fb.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required],
      stock: ['', Validators.required],
      photo: [''],
      state: [true],
      categoryId: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.categoryService.getAll().subscribe((response: any)=>{
      this.categories = response.content;
    });
  }

  onSubmit() {
    const articleData = this.articleForm.value;
    this.consultArticleService.create(articleData).subscribe(response => {
      console.log('Artículo creado:', response);
      this.dialogRef.close(response);
    });
  }

  onCancel() {
    this.dialogRef.close();
    this.articleForm.reset();
  }
}
