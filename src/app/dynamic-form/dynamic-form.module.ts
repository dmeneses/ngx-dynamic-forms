import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form.component';
import { AttributeSetterDirective } from './attribute-setter.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DynamicFormComponent, AttributeSetterDirective],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
