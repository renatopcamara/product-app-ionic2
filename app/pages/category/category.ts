import { Component } from '@angular/core';
import { NavController, Alert, Modal } from 'ionic-angular';
import {CategoryService} from './../../providers/category-service/category-service';
import {CategoryModalPage} from './../category-modal/category-modal';

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

  removeCategory(category) {
    let alert = Alert.create({
      title: 'Deletar Categoria',
      message: 'Deseja realmente deletar a categoria \'' + category.nome + '\'?',
      buttons: [
        {text: 'Cancelar'},
        {
          text: 'Deletar',
          handler: (data) => {
            this.categoryService.delete(category.id)
            .then((res) => {
              if (res) {
                this.findAll();
              }
            }, (error) => {
              console.log('Erro ao deletar a categoria',error);
            });
          }
        }
      ]
    });
    this.nav.present(alert);
  }

  addCategory() {
    let modal = Modal.create(CategoryModalPage);

    modal.onDismiss(() => {
      this.findAll();
    })

    this.nav.present(modal);
  }
}
