import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TokenInterceptor } from '../shared/classes/token.interceptor';
import { OverviewPageComponent } from './overview-page.component';
import { OverviewPageRoutingModule } from './overview-page-routing.module';








@NgModule({
  declarations: [
 
    OverviewPageComponent,
  

  ],
      imports: [
     CommonModule,
     SharedModule,
     FormsModule,
     OverviewPageRoutingModule,
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
export class OverviewPageModule {
}
