import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TokenInterceptor } from '../shared/classes/token.interceptor';


import { OrderPageComponent } from './order-page.component';
import { OrderCategoriesComponent } from './order-categories/order-categories.component';
import { OrderPositionsComponent } from './order-positions/order-positions.component';
import { OrderPageRoutingModule } from './order-page-routing.module';






@NgModule({
  declarations: [
    OrderPageComponent,
    OrderCategoriesComponent,
    OrderPositionsComponent,

  

  ],
      imports: [
     CommonModule,
     SharedModule,
     FormsModule,
     OrderPageRoutingModule,
      ReactiveFormsModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],

})
export class OrderPageModule {
}
