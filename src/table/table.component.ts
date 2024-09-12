import { Component, OnInit } from '@angular/core';
import { PaginationComponent } from "../pagination/pagination.component";
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CurrencyPipe, NgTemplateOutlet } from '@angular/common';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { CardComponent } from "../card/card.component";
import { PdfDownloadService } from '../services/pdf-download.service';
import {  PrimeModule } from '../shared-module/prime-button/prime.module';

interface Data{
  name: string;
  description: string;
  img: string;
  status:boolean,
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;

}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [PaginationComponent, TableModule, CurrencyPipe,FormsModule,SearchFieldComponent,PrimeModule, NgTemplateOutlet,
    AsyncPipe, CardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  tableHeadData = ['#','المستخدم','رقم التذكرة','قيمة التذكرة','السينمات','عدد الاشخاص','عدد مرات الشراء','التذكرة']
  data:Data[] = [{
    name: 'mohamed ashraf',
    description: 'Product Description',
    img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
    status:false,
    price: 65,
    category: 'Accessories',
    quantity: 24,
    inventoryStatus: 'INSTOCK',
    rating: 5,
  },
    {
      name: 'ahmed ashraf',
     description: 'Product Description',
     img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
     status:false,
     price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
      },{
        name: 'ashraf ali',
         description: 'Product Description',
         img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
         status:false,
         price: 65,
        category: 'Accessories',
        quantity: 24,
        inventoryStatus: 'INSTOCK',
        rating: 5
        },
    {
      name: 'karim ashraf',
      description: 'Product Description',
      img: 'assets/169504324_ad4d5ef6-aa16-40cd-85a4-34aae516323c.jpg',
      status:true,
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5
      }
    ]
  
    constructor(private pdfService:PdfDownloadService) { }

    ngOnInit(): void {}
    
    imageErr(){

    }
  
    downloadPDF() {
    this.pdfService.downloadPDF().subscribe()
    }
  
    nicName(name?:string){
      let firstChar = name!.split(' ')[0][0];
      let SecondChar = name!.split(' ')[1][0];
          return  firstChar! + SecondChar!
    }





  }


