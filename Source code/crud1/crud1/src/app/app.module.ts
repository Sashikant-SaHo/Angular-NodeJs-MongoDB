import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FishComponent } from './fish/fish.component';
import { CalculatorServices } from '../services/calculater.services';
import { TriServices } from '../services/tri.servies';
import { peri } from '../services/perimeter.services';
import { SocketService } from '../services/socket.service';
import { Socketcomm } from '../services/socketcomm.service';
import { ContactModule } from './contact/contact.module';
// import {ContactModule}
@NgModule({
  declarations: [
    AppComponent,
    FishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContactModule

  ],
  providers: [Socketcomm,SocketService,CalculatorServices,TriServices,peri],
  bootstrap: [AppComponent]
})
export class AppModule { }
