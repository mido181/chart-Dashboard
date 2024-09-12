import { Component, Input } from '@angular/core';
import { PdfDownloadService } from '../services/pdf-download.service';
import { BehaviorSubject } from 'rxjs';
import { AsyncPipe, CurrencyPipe, NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchFieldComponent } from '../search-field/search-field.component';

interface Data{
  name: string;
  description: string;
  img: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;

}


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [PaginationComponent,TableModule,CurrencyPipe,
    TooltipModule,InputSwitchModule,
    FormsModule,ButtonModule,DropdownModule,
    SearchFieldComponent,
    AvatarModule,
    ImageModule,
    NgTemplateOutlet,
    AsyncPipe
  ],  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
@Input() 
data!:Data;




}
