import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {CategoryPage} from './../category/category';
import {ProductPage} from './../product/product';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  tabRoot1: any;
  tabRoot2: any;

  constructor(private navController: NavController) {
    this.tabRoot1 = ProductPage;
    this.tabRoot2 = CategoryPage;

  }
}
