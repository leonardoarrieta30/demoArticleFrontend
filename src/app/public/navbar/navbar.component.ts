import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  options = [
    { path: '/articles-consult', title: 'Articles'},
    { path: '/create-category', title: 'Create Category'}
  ]
}
