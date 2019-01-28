import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  arrComida: Producto[]
  arrBebida: Producto[]
  arrListaCompra: Producto[]

  constructor() {
    this.arrComida = [
      new Producto('Galletas', 1.5, '../../assets/img/galleta.png'),
      new Producto('Patatas', 2, '../../assets/img/patatas.jpg'),
      new Producto('Pescado', 5.3, '../../assets/img/pescado.jpeg'),
      new Producto('Nueces', 0.8, '../../assets/img/nueces.jpg'),
    ]

    this.arrBebida = [
      new Producto('Zumo', 2, '../../assets/img/zumo.jpg'),
      new Producto('Leche', 1, '../../assets/img/leche.jpeg'),
      new Producto('Café', 1.5, '../../assets/img/cafe.jpg'),
      new Producto('Cerveza', 3, '../../assets/img/cerveza.jpg'),
      new Producto('Vino', 3, '../../assets/img/vino.jpeg'),
    ]
    this.arrListaCompra = []
  }

  ngOnInit() {

  }

  handleProductoReci(productoRecibido){
    this.arrListaCompra.push(productoRecibido)
    console.log(this.arrListaCompra)
  }

}
