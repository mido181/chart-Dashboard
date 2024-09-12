import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { CopyService } from '../services/copy.service';
import { QRCodeModule } from "angularx-qrcode";
@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [TooltipModule ,ButtonModule,IconFieldModule,InputIconModule,
    InputTextModule,
    QRCodeModule
  ],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.scss'
})
export class TicketComponent {
  inputVal:string ='www.tazkty.com/473847';
  myAngularxQrCode:string = this.inputVal;
  copy:string = 'نسخ';

  constructor(private copyService: CopyService) {}

  Copied(){
    this.copy = 'تم النسخ';
    this.copyService.copyText(this.inputVal)
    setTimeout(() => {
      this.copy = 'نسخ';
    }, 10000);
  }

  reset(){
    this.copy = 'نسخ';
  }

}
