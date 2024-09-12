import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';
import { PrimeModule } from '../../shared-module/prime-button/prime.module';
import { CopyService } from '../../services/copy.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    PrimeModule,
    QRCodeModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
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
