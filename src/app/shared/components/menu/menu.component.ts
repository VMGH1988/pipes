import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {


  public menuItems: MenuItem[]= [];

  ngOnInit(){
    this.menuItems =[
      {
        label:'Pipes de Angular',
        icon: 'pi-desktop',
        items:[
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink:'' // gracias a menuItems podemos usar routerLink y ya te manda a donde quieras que tengas puesto en el router
        },
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          routerLink:'numbers'
        },
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
          routerLink:'uncommon'
        }
      ]
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-cod',
      items:[
        {
          label: 'Otro elemento'
        }
      ]
    }
    ];
  }

}
