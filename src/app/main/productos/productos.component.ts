import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() titulo: string
  @Input() arrProducto: Producto[]

  @Output() listaProductos = new EventEmitter()

  constructor() {

  }

  ngOnInit() {
  }

  handleClick(product){
    //console.log(product)
    this.listaProductos.emit(product)
  }

}
