import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatToolbarModule,MatTableModule} from '@angular/material';

@NgModule({
  imports:[MatButtonModule,MatToolbarModule,MatTableModule],
  exports:[MatButtonModule,MatToolbarModule,MatTableModule]
})

export class MaterialModule{}
