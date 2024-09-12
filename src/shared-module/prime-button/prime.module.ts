import { NgModule } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { IconFieldModule } from 'primeng/iconfield';
import { ImageModule } from 'primeng/image';
import { InputIconModule } from 'primeng/inputicon';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
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
  IconFieldModule,
  InputIconModule,
  InputTextModule,
  FloatLabelModule
]



@NgModule({
  declarations: [],
  imports: [...primeModules],
  exports:[...primeModules]
})
export class PrimeModule { }
