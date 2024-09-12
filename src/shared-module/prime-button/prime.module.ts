import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';


const primeModules = [
  ButtonModule,
  TableModule,
  DropdownModule,
  ImageModule,
  TooltipModule, 
  InputSwitchModule,
  AvatarModule,

]



@NgModule({
  declarations: [],
  imports: [...primeModules],
  exports:[...primeModules]
})
export class PrimeModule { }
