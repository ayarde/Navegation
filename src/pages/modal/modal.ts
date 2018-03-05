import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  name:string = "";
  age:number = 0;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.name = this.navParams.get("name");
    this.age = this.navParams.get("age");

    console.log(this.name, this.age);;
  }

  closeWithParameters() {
    let data = {
      name: "Pepe Grillo",
      age: 15,
      coordinates : {
        lat: 10,
        long:-10
      }
    };
    this.viewCtrl.dismiss(data);
  }

  closeWithoutParameters() {
    this.viewCtrl.dismiss();
  }

}
