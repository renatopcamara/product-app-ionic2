import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/category-modal/category-modal.html',
})
export class CategoryModalPage {
  constructor(private nav: NavController, private view: ViewController) {
    
  }

  close(){
    this.view.dismiss();
  }
}
