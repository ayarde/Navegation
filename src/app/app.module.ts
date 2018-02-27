import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import {
  SettingsPage,
  PrincipalPage,
  Settings2Page,
  ModalPage,
  Page2Page,
  Page3Page,
  TabsPage
} from "../pages/index.pages"

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    PrincipalPage,
    Settings2Page,
    ModalPage,
    Page2Page,
    Page3Page,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    PrincipalPage,
    Settings2Page,
    ModalPage,
    Page2Page,
    Page3Page,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
