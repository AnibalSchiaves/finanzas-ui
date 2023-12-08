import { Component } from '@angular/core';
import { activos } from '../activos';

@Component({
  selector: 'app-activos-list',
  templateUrl: './activos-list.component.html',
  styleUrls: ['./activos-list.component.css']
})
export class ActivosListComponent {

  activos = [...activos];

  showOperaciones(nombre: string) {
    window.alert("Vamos a tradear con "+nombre);
  }
}
