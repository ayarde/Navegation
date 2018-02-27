import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

/**
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {

  mutant:any = {};

  constructor(private navParams: NavParams, private navCtrl:NavController) {
    console.log(navParams);
    this.mutant = this.navParams.get("mutant");
  }

  goBack(){
    this.navCtrl.pop();
  }

  goRoot(){
    this.navCtrl.popToRoot();
  }
}
