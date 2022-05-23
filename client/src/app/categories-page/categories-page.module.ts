import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';

import { CategoriesPageComponent } from './categories-page.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { PositionsFormComponent } from './categories-form/positions-form/positions-form.component';
import { CategoriesPageRoutingModule } from './categories-page-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TokenInterceptor } from '../shared/classes/token.interceptor';





@NgModule({
  declarations: [
    CategoriesPageComponent,
      CategoriesFormComponent,
    PositionsFormComponent,


  ],
      imports: [
     CommonModule,
     CategoriesPageRoutingModule,
     SharedModule,
     FormsModule,
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
export class CategoriesPageModule {
}
