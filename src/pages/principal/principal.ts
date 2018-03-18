import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { Page2Page} from "../index.pages"

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  page2:any = Page2Page;

  constructor(public navCtrl: NavController,
              private menuCtrl: MenuController) {
  }

  navegatePage() {
    this.navCtrl.push( Page2Page);
  }

  showMenu(){
    this.menuCtrl.toggle();
  }
}
