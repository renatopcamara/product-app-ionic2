import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {CategoryService} from './providers/category-service/category-service'
import {ProdutcService} from './providers/produtc-service/produtc-service'

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  providers:[CategoryService, ProdutcService]
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);
