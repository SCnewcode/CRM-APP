import {NgModule} from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { SiteLayoutComponent } from '../shared/layouts/site-layout/site-layout.component';
import { AuthGuard } from '../shared/classes/auth.guard';
import { HistoryPageComponent } from './history-page.component';


const HistoryPageRoutes: Routes = [  
        {path: '', component: HistoryPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(HistoryPageRoutes)
    ],
    exports: [
      RouterModule
    ]
  })



export class HistoryPageRoutingModule {
}