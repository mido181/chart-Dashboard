import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from '../shared-module/prime-button/prime.module';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    FormsModule,
    PrimeModule
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent  {
  searchfieldval:string = ''
  ActiveVal:string ='غير مفعلة';
  isActive:boolean = false;
  
  checkActive(){
    this.isActive = !this.isActive;
    this.ActiveVal = this.isActive ? ' مفعلة' : 'غير مفعلة'
  }
  

  

}
