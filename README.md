# PruebaAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Trabajo

ng new prueba-angular

ng serve

ng g component top-bar

ng g component activos-list

edite app.component.html

edite styles.css

edite app.module.ts agregando:

```
RouterModule.forRoot([
  { path: '', component: ActivosListComponent },
])
```

cree activos.ts con una constante que es el array de activos

edite activos-list.component.ts para importar la lista de activos y ponerla como variable del componente

edite activos-list.component.html agregando

```
<div *ngFor="let activo of activos">
    <h3>
        {{activo.ticker}}
    </h3>
    <span>
        {{activo.nombre}}
    </span>
</div>
```