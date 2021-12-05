export class PedidoOracion {
  id?: number;
  f_pedido:Date;
  estado: string;
  f_respuesta:Date;
  oracion:string;
  respuesta:string;

  constructor( f_pedido:Date,
    estado: string,
    f_respuesta:Date,
    oracion:string,
    respuesta:string,) {

    this.f_pedido = f_pedido;
     this.estado = estado;
    this.f_respuesta = f_respuesta;
    this.oracion = oracion;
    this.respuesta = respuesta;

}

}
