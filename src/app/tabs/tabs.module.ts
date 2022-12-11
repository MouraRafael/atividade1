import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    TabsPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
