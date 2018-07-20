import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService,SidebarService,SharedService } from './service.index';

SettingsService

@NgModule({
  imports: [
    CommonModule,
    
  ],
  providers:[
    SettingsService,
    SidebarService,
    SharedService
  ],
  declarations: []
})
export class ServiceModule { }
