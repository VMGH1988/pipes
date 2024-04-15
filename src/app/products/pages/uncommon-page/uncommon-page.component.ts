import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
// in18n Select
public name: string  = 'Victor';
public gender: 'male'|'female' = 'male';
public invitationMap = {'male':' invitarlo', 'female': 'invitarla'};

  changeClient():void{
    this.name = 'Melissa';
    this.gender = 'female';
  };

// in18nPlural

public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Melissa', 'Natalia'];
public clientsMap ={
  '=0': 'no tenemos ningún cliente ',
  '=1': 'tenemos # cliente ',
  'other': 'tenemos # clientes ',
}

deleteCLient():void{
  this.clients.shift(); // shift borrar el primer elemento del array
}

// keyValue Pipe
public person = {
  name: 'Victor',
  age: 36,
  address: 'Ottawa, Canada'
}

// Async Pipe
public myObservableTimer: Observable<number> = interval(2000).pipe(
  tap(value=> console.log('tap:', value))
);

public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
  setTimeout(()=>{resolve('Tenemos data en la promesa.');
  console.log('Tenemos data en la promesa');
  this.person.name='Otro nombre'
},3500);
});


}
