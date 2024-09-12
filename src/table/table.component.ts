import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from "../pagination/pagination.component";
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CurrencyPipe, NgTemplateOutlet } from '@angular/common';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { PdfDownloadService } from '../services/pdf-download.service';
import {  PrimeModule } from '../shared-module/prime-button/prime.module';

interface Data{
  name: string;
  img: string;
  status:boolean,
}
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [PaginationComponent, 
    TableModule, CurrencyPipe,
    FormsModule,SearchFieldComponent,
    PrimeModule, NgTemplateOutlet,
    AsyncPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  tableHeadData = ['#','المستخدم','رقم التذكرة','قيمة التذكرة','السينمات','عدد الاشخاص','عدد مرات الشراء','التذكرة']
  data:Data[] = [{
    name: 'mohamed ashraf',
    img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
    status:false,
  },
    {
      name: 'ahmed ashraf',
      img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
     status:false,
      },{
        name: 'ashraf ali',
        img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
         status:false,
        },
    {
      name: 'karim ashraf',
        img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
      status:true,
      }
    ]
  
    constructor(private pdfService:PdfDownloadService) { }

  
  
    downloadPDF() {
    this.pdfService.downloadPDF().subscribe()
    }
  
    nicName(name?:string){
      let firstChar = name!.split(' ')[0][0];
      let SecondChar = name!.split(' ')[1][0];
          return  firstChar! + SecondChar!
    }





  }


