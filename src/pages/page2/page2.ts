import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page3Page} from "../index.pages"
/**
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {
  page3:any = Page3Page;
  mutants:any[] =[
    {
      name:"Magneto",
      power: "Mental Control"
    },
    {
      name:"Wolverine",
      power: "Accelerated regeneration"
    },
    {
      name:"Professor X",
      power: "Phychics power"
    },
    {
      name:"Gambit",
      power: "Charge objects with energy"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  toPage3(mutant:any) {
    console.log(mutant);
    this.navCtrl.push(Page3Page, { 'mutant': mutant });
  }

}
