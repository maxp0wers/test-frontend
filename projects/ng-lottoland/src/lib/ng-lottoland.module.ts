import { NgModule } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DropdownComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownComponent,
    TableComponent
  ]
})
export class NgLottolandModule { }
