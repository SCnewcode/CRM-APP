import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { SiteLayoutComponent } from '../shared/layouts/site-layout/site-layout.component';
import { AuthGuard } from '../shared/classes/auth.guard';
import { AnalyticsPageComponent } from './analytics-page.component';


const AnalyticsPageRoutes: Routes = [      
          {path: '', component: AnalyticsPageComponent},
];

@NgModule({
    imports: [
        RouterModule.forChild(AnalyticsPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })



export class AnalyticsPageRoutingModule {
}