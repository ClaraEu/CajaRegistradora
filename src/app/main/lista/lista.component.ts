import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() listaCompra: Producto[]

  constructor() { }

  ngOnInit() {
  }

  sumarPrecios(){
    // for( let p of this.listaCompra){
    //   this.total += p.precio
    // }
    let suma = 0

    for (var i = 0; i < this.listaCompra.length; i++) {
      suma += this.listaCompra[i].precio
      //if(this.listaCompra[i] === this.listaCompra[i]){
        //this.listaCompra[i].precio += this.listaCompra[i].precio

      //}
    }
    return suma
  }

  handleClickBorrar(index){
    this.listaCompra.splice(index, 1)
    console.log(this.listaCompra)
  }
}
