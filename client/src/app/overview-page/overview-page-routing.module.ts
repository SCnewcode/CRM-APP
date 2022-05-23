import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from '../shared/layouts/site-layout/site-layout.component';
import { AuthGuard } from '../shared/classes/auth.guard';
import { OverviewPageComponent } from './overview-page.component';



const OverviewPageRoutes: Routes = [  
          {path: '', component: OverviewPageComponent},         
];

@NgModule({
    imports: [
        RouterModule.forChild(OverviewPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })



export class OverviewPageRoutingModule {
}