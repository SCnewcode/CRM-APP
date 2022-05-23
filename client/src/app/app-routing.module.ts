import {NgModule} from '@angular/core'
import {RouterModule, Routes, PreloadAllModules} from '@angular/router'
import {LoginPageComponent} from './login-page/login-page.component'
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component'
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {AuthGuard} from './shared/classes/auth.guard'
import {OverviewPageComponent} from './overview-page/overview-page.component'
import { NotFoundComponent } from './shared/components/not-found/not-found.component'



const routes: Routes = [
  {
    path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },

  {
    path: '', component: SiteLayoutComponent, canActivate:  [AuthGuard], children: [

      {path: 'categories', loadChildren: './categories-page/categories-page.module#CategoriesPageModule' },
      {path: 'analytics', loadChildren: './analytics-page/analytics-page.module#AnalyticsPageModule'},
      {path: 'history', loadChildren: './history-page/history-page.module#HistoryPageModule'},
      {path: 'order', loadChildren: './order-page/order-page.module#OrderPageModule'},
      {path: 'overview', loadChildren: './overview-page/overview-page.module#OverviewPageModule'}
      
   
    ]
  },

  {path: '**', component: NotFoundComponent}

]


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
