import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import {CategoryService} from './../../providers/category-service/category-service';

@Component({
  templateUrl: 'build/pages/category-modal/category-modal.html',
})
export class CategoryModalPage {

  category: any;

  constructor(private nav: NavController, private view: ViewController, private categoryService: CategoryService, private params: NavParams) {
    this.category = params.get('category') || {};
  }

  close() {
    this.view.dismiss();
  }

  save(){

    if (this.category.id != undefined) {
      this.categoryService.update(this.category)
      .then((res) => {
        if (res) {
          this.view.dismiss();
        }
      }, (error) =>{
        console.log('Erro ao atualizar categoria', error);
      });
    } else {
      this.categoryService.insert(this.category)
      .then((res) => {
        if (res) {
          this.view.dismiss();
        }
      }, (error) =>{
        console.log('Erro ao cadastrar categoria', error);
      });
    }


  }
}
