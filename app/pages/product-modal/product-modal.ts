import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import {ProdutcService} from './../../providers/produtc-service/produtc-service';
import {CategoryService} from './../../providers/category-service/category-service';

@Component({
  templateUrl: 'build/pages/product-modal/product-modal.html',
})
export class ProductModalPage {

  product: any;
  categories: Array<any>;

  constructor(private nav: NavController, private view: ViewController, private params: NavParams, private productService: ProdutcService, private categoryService: CategoryService) {
    this.product = params.get('product') || {};

    this.categoryService.findAll()
      .then((categories: Array<any>) => {
        this.categories = categories;
      }, (error) => {
        this.categories = [];
        console.log('Erro ao buscar produto', error);
      });
  }

  close() {
    this.view.dismiss();
  }

  save() {

    if (this.product.id != undefined) {

      this.productService.update(this.product)
      .then((res) => {
        if (res) {
          this.view.dismiss();
        }
      }, (error) => {
        console.log('Erro ao atualizar de Produto', Error);
      });
    } else {
      this.productService.insert(this.product)
      .then((res) => {
        if (res) {
          this.view.dismiss();
        }
      }, (error) => {
        console.log('Erro ao atualizar de Produto', Error);
      });

    }

  }
}
