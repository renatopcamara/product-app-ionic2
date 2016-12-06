import { Component } from '@angular/core';
import { NavController, Alert, Modal  } from 'ionic-angular';
import {ProdutcService} from './../../providers/produtc-service/produtc-service';
import {ProductModalPage} from './../product-modal/product-modal';

@Component({
  templateUrl: 'build/pages/product/product.html',
})
export class ProductPage {

  products: Array<any>;

  constructor(private nav: NavController, private productService: ProdutcService) {
    this.findAll();
  }

  findAll() {
    this.productService.findAll()
    .then((products: Array<any>) => {
      this.products = products;
    }, (error) => {
      console.log('Erro ao listar produto: ', error);
    })
  }

  removeProduct(product) {
    let alert = Alert.create({
      title: 'Deletar Produto',
      message: 'Deseja realmente deletar o produto \'' + product.nome + '\'?',
      buttons: [
        {text: 'Cancelar'},
        {
          text: 'Deletar',
          handler: (data) => {
            this.productService.delete(product.id)
            .then((res) => {
              if (res) {
                this.findAll();
              }
            }, (error) => {
              console.log('Erro ao deletar o produto',error);
            });
          }
        }
      ]
    });
    this.nav.present(alert);
  }

  addProduct() {
    let modal = Modal.create(ProductModalPage);

    modal.onDismiss(() => {
      this.findAll();
      });

    this.nav.present(modal);
  }

  updateProduct(product){
    let modal = Modal.create(ProductModalPage, {
      product: product
      });

    modal.onDismiss(() => {
      this.findAll();
      });

    this.nav.present(modal);
  }

}
