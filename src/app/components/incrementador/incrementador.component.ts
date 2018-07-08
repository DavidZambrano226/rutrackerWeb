import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  //a travez de los input, recibo un valor del formulario padre en el que estoy utilizando 
  //este componente, y ese valor se lo paso a travez de la etiqueta html, indicandole
  //el nombre de la variable.

  //si pongo dentro del parentesis del input un nombre, esa es la variable que debo usar en la
  //etiqueta html para pasar los valores 

  @Input('nombre') leyenda:string = 'Leyenda';
  @Input() porcentaje:number = 50;

  //aqui con el output regresamos un valor al padre
  @Output() cambioValor:EventEmitter<number> = new EventEmitter();

  constructor() {

   }

  

  ngOnInit() {
    console.log('leyenda: ', this.leyenda);
    
  }
  cambiarValor( valor ){
    if(this.porcentaje >= 100 && valor > 0){
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;

    this.cambioValor.emit(this.porcentaje);
  }

}
