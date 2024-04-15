import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'victor';
  public nameUpper: string = 'VICTOR';
  public fullName: string = 'ViCtOr gArCiA';

  public customDate: Date = new Date();
}
