export const activos = [
    {
        id: 1,
        ticker: "PAMP",
        nombre: "Pampa Energía",
        tipo: "Acción",
        cantidad: 10,
        cotizacion: 500.00,
        valorizado: 5000.00,
        rendimiento: 45,
        rendimientoAnual:150,
        operaciones:[]
    },
    {
        id: 2,
        ticker: "AMZN",
        nombre: "Amazon",
        tipo: "Acción",
        cantidad: 10,
        cotizacion: 300.00,
        valorizado: 3000.00,
        rendimiento: 35,
        rendimientoAnual:120,
        operaciones:[]
    },
    {
        id: 3,
        ticker: "TX26",
        nombre: "Bono Cer 2% Vto. 2016",
        tipo: "Bono",
        cantidad: 10,
        cotizacion: 350.00,
        valorizado: 3500.00,
        rendimiento: 20,
        rendimientoAnual:100,
        operaciones:[]
    }
]

export interface Operacion {
    id: number,
    fechaHora: Date,
    operacion: string,
    cantidad: number,
    comision: number,
    impuestos: number,
    precioUnitario: number,
    monto: number,
    rendimiento:number,
    rendimientoAnual: number
}

export interface Activo {

    id: number,
    ticker: string,
    nombre: string,
    tipo: string,
    cantidad: number,
    cotizacion: number,
    valorizado: number,
    rendimiento: number,
    rendimientoAnual: number,
    operaciones: Operacion[]

}