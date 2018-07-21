import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

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

  //con viewclhild podemos manejar varios componentes unicamente referenciando uno
  //para hacer referencia, en el html le agrego un hash ( # )seguido de un nombre

  @ViewChild('txtProgress') txtProgress:ElementRef;

  constructor() {

   }

  

  ngOnInit() {
    
    
  }

  onChanges( newValue:number ){
    // console.log(newValue);
    
    //evitamos que el input deje escribir mas de 100 y numero negativos, aqui obtenemos el input
    // let elemHTML:any = document.getElementsByName('porcentaje')[0];
    
    if (newValue >= 100) {
      this.porcentaje = 100;
    }else if(newValue <= 0){
      this.porcentaje = 0;
    }else{
      this.porcentaje = newValue;

    }
    //aqui usando la propiedad value, lo seteamos a lo permitido en porcentaje
    // elemHTML.value = this.porcentaje;
    this.txtProgress.nativeElement.value = this.porcentaje;
  
    this.cambioValor.emit(this.porcentaje);
    
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

    //establecemos el foco en un elemento
    this.txtProgress.nativeElement.focus();
  }

}
