import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [ButtonModule,InputTextModule,
    InputSwitchModule,
    FormsModule,
    FloatLabelModule
  ],
  templateUrl: './search-field.component.html',
  styleUrl: './search-field.component.scss'
})
export class SearchFieldComponent implements OnInit {
  ngOnInit(): void {}
  searchfieldval:string = ''
  isActive:boolean = false;
  ActiveVal:string ='غير مفعلة';
  
  checkActive(){
    this.isActive = !this.isActive;
    this.ActiveVal = this.isActive ? ' مفعلة' : 'غير مفعلة'
  }
  

  

}
