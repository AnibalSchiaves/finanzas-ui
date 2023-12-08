import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { activos } from '../activos';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  
  operacionForm = new FormGroup({
    ticker: new FormControl({value: '', disabled: true}),
    tipoOper: new FormControl({value: '', disabled: true})
  });

  constructor(
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    let activoId = Number(this.route.snapshot.paramMap.get("activoId"));
    let tipoOper = this.route.snapshot.paramMap.get("tipoOper");
    let activo = activos.find(a => a.id === activoId);
    console.log(activo);
    this.operacionForm.controls.ticker.setValue(activo?activo.ticker:null);
    this.operacionForm.controls.tipoOper.setValue(tipoOper);
    console.log(this.operacionForm.value);
  };

  onSubmit(): void {
    console.log(this.operacionForm.value);
  }

}
