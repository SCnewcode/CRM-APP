import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { CategoriesPageComponent } from './categories-page.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { SiteLayoutComponent } from '../shared/layouts/site-layout/site-layout.component';
import { AuthGuard } from '../shared/classes/auth.guard';


const CategoriesPageRoutes: Routes = [  
   {path: '', component: CategoriesPageComponent},
  {path: 'new', component: CategoriesFormComponent},
  {path: ':id', component: CategoriesFormComponent} 




];

@NgModule({
    imports: [
        RouterModule.forChild(CategoriesPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })



export class CategoriesPageRoutingModule {
}