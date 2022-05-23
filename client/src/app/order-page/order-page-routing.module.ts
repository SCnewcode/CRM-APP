import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from '../shared/layouts/site-layout/site-layout.component';
import { AuthGuard } from '../shared/classes/auth.guard';
import { OrderPageComponent } from './order-page.component';
import { OrderCategoriesComponent } from './order-categories/order-categories.component';
import { OrderPositionsComponent } from './order-positions/order-positions.component';



const OrderPageRoutes: Routes = [  

        {path: '', component: OrderPageComponent, children: [
            {path: '', component: OrderCategoriesComponent},
            {path: ':id', component: OrderPositionsComponent}
        ]}


];

@NgModule({
    imports: [
        RouterModule.forChild(OrderPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })



export class OrderPageRoutingModule {
}