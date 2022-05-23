import {NgModule} from '@angular/core'
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { TokenInterceptor } from '../shared/classes/token.interceptor';
import { HistoryPageComponent } from './history-page.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryFilterComponent } from './history-filter/history-filter.component';
import { HistoryPageRoutingModule } from './history-page-routing.module';
import { FilterPipe } from '../shared/pipes/filter.pipe';






@NgModule({
  declarations: [
    HistoryPageComponent,
    HistoryListComponent,
    HistoryFilterComponent,
    FilterPipe
  

  ],
      imports: [
     CommonModule,
     SharedModule,
     FormsModule,
     HistoryPageRoutingModule,
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
export class HistoryPageModule {
}
