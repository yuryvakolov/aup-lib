import { NgModule } from '@angular/core';
import { AupComponentsComponent } from './aup-components.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    AupComponentsComponent,
    ButtonComponent,
  ],
  imports: [
  ],
  exports: [
    AupComponentsComponent
  ]
})
export class AupComponentsModule { }
