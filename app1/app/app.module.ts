import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DoctorsComponent } from './doctors/doctors.component';
import {HttpModule} from '@angular/http';
import { ProductComponent } from './product/product.component';
import { CalculatorService } from './services/calculator.service';
import { TriangleService } from './services/triangle.service';
import { PeriService } from './services/peri.service';
import { TriService } from './services/tri.service';
import { PromiseService } from './services/promise.service';
import { Obs1Component } from './obs1/obs1.component';
import { Templateform1Component } from './templateform1/templateform1.component';
import { Reactiveex1Component } from './reactiveex1/reactiveex1.component';
import { Dynamicform1Component } from './dynamicform1/dynamicform1.component';
import { DoublePipe } from './pipes/double.pipe';
import { TestpipeComponent } from './testpipe/testpipe.component';
import { PowPipe } from './pipes/pow.pipe';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DoctorsComponent,
    ProductComponent,
    Obs1Component,
    Templateform1Component,
    Reactiveex1Component,
    Dynamicform1Component,
    DoublePipe,
    TestpipeComponent,
    PowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule

  ],
  providers: [PromiseService,CalculatorService,TriangleService,TriService,PeriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
