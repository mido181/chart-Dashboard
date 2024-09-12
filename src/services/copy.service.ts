import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  constructor() { }

  copyText(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();   
    document.execCommand('copy');
    document.body.removeChild(textArea);   

  }
}
