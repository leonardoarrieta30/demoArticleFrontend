import {Component} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../model/category";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent{

  category!: Category;
  categoryForm: FormGroup;
  constructor(private categoriesService: CategoriesService, private fb: FormBuilder, private router: Router) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      image: ['']
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.category = this.categoryForm.value;
      this.addCategory(this.category);
      this.router.navigate(['/articles-consult']);
    }

  }



  addCategory(category: Category){
    this.categoriesService.create(category).subscribe((response: any)=>{
      console.log('Categoría creada:', response);
    })

  }





}
