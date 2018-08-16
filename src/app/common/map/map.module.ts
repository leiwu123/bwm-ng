import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { CamelizePipe } from "ngx-pipes";
import { CommonModule } from '@angular/common';

import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC99A1fyeAunH-vnw9Es_fyv_Tg1EVQE50'

    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ],

})
export class MapModule { }
