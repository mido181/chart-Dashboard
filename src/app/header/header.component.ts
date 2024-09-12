import { Component } from '@angular/core';
import { PrimeModule } from '../../shared-module/prime-button/prime.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  ticketNum = 1234;
}
