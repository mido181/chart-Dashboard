import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "../table/table.component";
import { TicketComponent } from "../ticket/ticket.component";
import { ChartComponent } from '../chart/chart.component';
import { ToastrModule } from 'ngx-toastr';
import { ToasterService } from '../services/toaster.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { trigger, transition, style, animate } from '@angular/animations';
import { HeaderComponent } from "./header/header.component";
import { SearchFieldComponent } from "../search-field/search-field.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, TicketComponent, ButtonModule, ToastModule, ChartComponent, HeaderComponent, SearchFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('toastAnimation', [
      transition(':enter',   
 [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class AppComponent  {
  constructor(private toasterService:ToasterService,private messageService: MessageService ){}
  title = 'chart-Dashboard';

  showToaster() {
  }

  
  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
}

}
