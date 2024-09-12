import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from "../table/table.component";
import { ChartComponent } from '../chart/chart.component';
import { HeaderComponent } from "./header/header.component";
import { SearchFieldComponent } from "../search-field/search-field.component";
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent,
    ChartComponent, HeaderComponent, SearchFieldComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent  {
  title = 'chart-Dashboard';
}
