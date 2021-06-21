import { NgModule } from '@angular/core';
import { AupComponentsComponent } from './aup-components.component';
import { AupButtonComponent } from './aup-button/aup-button.component';



@NgModule({
  declarations: [
    AupComponentsComponent,
    AupButtonComponent,
  ],
  imports: [
  ],
  exports: [
    AupComponentsComponent
  ]
})
export class AupComponentsModule { }
