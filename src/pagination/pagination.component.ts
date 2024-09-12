import { Component } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';


interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [PaginatorModule],

  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  first: number|any = 0;
  rows: number|any = 10;

first1: number = 0;

rows1: number = 10;

first2: number = 0;

rows2: number = 10;

first3: number = 0;

rows3: number = 10;

totalRecords: number = 250;

  onPageChange(event: any) {
      this.first = event.first as PageEvent;
      this.rows = event.rows as PageEvent;
  }

  options = [
      { label: 5, value: 5 },
      { label: 10, value: 10 },
      { label: 20, value: 20 },
      { label: 120, value: 120 }
  ];

  onPageChange1(event: { first: number; rows: number }) {
      this.first1 = event.first;
      this.rows1 = event.rows;
  }

  onPageChange2(event: any) {
      this.first2 = event.first;
      this.rows2 = event.rows;
  }

  onPageChange3(event: PageEvent) {
      this.first3 = event.first;
      this.rows3 = event.rows;
  }

}
