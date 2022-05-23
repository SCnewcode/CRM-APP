import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {NgxChartsModule} from '@swimlane/ngx-charts'

import {AppComponent} from './app.component'
import {LoginPageComponent} from './login-page/login-page.component'
import {AppRoutingModule} from './app-routing.module'
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component'
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {TokenInterceptor} from './shared/classes/token.interceptor'



import { DropdownDirective } from './shared/directives/dropdown.directive';
import { SharedModule } from './shared/shared.module'
import { NotFoundComponent } from './shared/components/not-found/not-found.component'





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    DropdownDirective,
    NotFoundComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    SharedModule
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
