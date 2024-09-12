import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfDownloadService {
constructor(private http:HttpClient , private fileSaverService:FileSaverService){}

    downloadPDF(){
     const textInPdf = 'wellcome to A-Tech' 
      const fileName = 'pdf-file.pdf'
      const fileType = this.fileSaverService.genType(fileName);
      const txtBlob = new Blob([textInPdf], { type: fileType });
      this.fileSaverService.save(txtBlob, fileName, undefined);

   return   this.http.get('assets/demo.pdf', {
            observe: 'response',
            responseType: 'blob',
          }).pipe(tap(res=>{
            this.fileSaverService.save(res.body, fileName);
          }))
          
      }
    }


     

    

