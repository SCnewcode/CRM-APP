import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TokenInterceptor } from '../shared/classes/token.interceptor';
import { AnalyticsPageComponent } from './analytics-page.component';
import { AnalyticsPageRoutingModule } from './analitics-page-routing.module';





@NgModule({
  declarations: [
 
    AnalyticsPageComponent,

  ],
      imports: [
     CommonModule,
     SharedModule,
     FormsModule,
     AnalyticsPageRoutingModule,
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
export class AnalyticsPageModule {
}
