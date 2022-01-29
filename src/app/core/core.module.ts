import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Services */
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    /* Services */
    LoggerService
  ],
  bootstrap: []
})
export class CoreModule { }
