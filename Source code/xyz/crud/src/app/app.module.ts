import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HttpModule } from '@angular/http';
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
import { Dynamic2frmComponent } from './dynamic2frm/dynamic2frm.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { Routeex1Component } from './routeex1/routeex1.component';
import { InfoComponent } from './info/info.component';
import { MyGuard } from './services/myguard.service';
import { ChildGuard } from './services/childguard.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ProductsComponent } from './products/products.component';
import { ProductinfoComponent } from './products/productinfo/productinfo.component';
import { CompanyComponent } from './company/company.component';
import { EmpComponent } from './company/emp/emp.component';
import { GardenComponent } from './garden/garden.component';
import { FlowerComponent } from './garden/flower/flower.component';
import { FlowerdesComponent } from './garden/flowerdes/flowerdes.component';
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
    PowPipe,
    Dynamic2frmComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    UsersComponent,
    Routeex1Component,
    InfoComponent,
    ParentComponent,
    ChildComponent,
    ProductsComponent,
    ProductinfoComponent,
    CompanyComponent,
    EmpComponent,
    GardenComponent,
    FlowerComponent,
    FlowerdesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivateChild : [ChildGuard],
        children: [
          { path: 'info/:id', component: InfoComponent }
        ]


    }
    ])
  ],

  
  providers: [ChildGuard,MyGuard, PromiseService, CalculatorService, TriangleService, TriService, PeriService],
  bootstrap: [AppComponent]
})
export class AppModule { }
