import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoryService} from './../../providers/category-service/category-service'

@Component({
  templateUrl: 'build/pages/category/category.html',
})
export class CategoryPage {

  categories: Array<any>;

  constructor(private nav: NavController, private categoryService: CategoryService) {
    this.findAll();
  }

  findAll() {
    this.categoryService.findAll()
    .then((categories: Array<any>) => {
      this.categories = categories;
    }, (error) => {
      console.log('Erro ao listar categorias: ', error);
    })
  }
}
