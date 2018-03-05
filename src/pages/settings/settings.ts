import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalPage } from '../index.pages';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private modalCtrl: ModalController) {
  }

  activePrincipal() {
    this.navCtrl.parent.select(2);
  }

  showModal(){
    let modal = this.modalCtrl.create(ModalPage, {name:"Ruth Ginebra", age:3});
    modal.present();

    modal.onDidDismiss(parameters =>{
      if(parameters){
        console.log("Show data modal");
        console.log(parameters);
      } else {
        console.log("Closed witout parameters");
      }
    });
  }

}
