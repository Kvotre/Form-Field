import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ MatFormFieldModule } from '@angular/material/form-field'
import { from } from 'rxjs';

const Material: any =[MatFormFieldModule]

@NgModule({
  
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
