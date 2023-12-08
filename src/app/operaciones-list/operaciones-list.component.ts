import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activo, Operacion, activos } from '../activos';
import { OperacionesService } from '../operaciones.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-operaciones-list',
  templateUrl: './operaciones-list.component.html',
  styleUrls: ['./operaciones-list.component.css']
})
export class OperacionesListComponent implements OnInit {

  activo: Activo | undefined;
  operaciones!: Observable<Operacion[]>;

  constructor(
    private route: ActivatedRoute,
    private operacionesService: OperacionesService
    ) {

  }

  ngOnInit(): void {
    const activoId = Number(this.route.snapshot.paramMap.get('activoId'));
    this.activo = activos.find(a => a.id === activoId);
    if (this.activo) {
      this.operaciones = this.operacionesService.getOperaciones(this.activo.ticker);
    }
    
  }

}
