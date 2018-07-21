import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,Subscriber, Subscription } from 'rxjs';
import { retry, map,filter } from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
//con el OnDestroy detecto cuando la persona sale de la pagina
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() { 
    

    //con esto me suscribo para ver los cambios
    //el observador es capaz de tener 3 callback, uno para la data, otro para error y el ultimo cuando termina
    //todos los observables tienen un pipe(tuberia), nos permite crear otras funciones
    // this.regresaObserver().pipe(

    //   //con la funcion retry podemos repetir un observer en caso de error las veces que necesitemos
    //   //dentro de la funcion rety podemos pasarle el numero de intentos que queremos que realice
    //   retry(2)

    // )   
    this.subscripcion = this.regresaObserver().subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el obse',error),
      () => console.log('El observador Termino.')      
      
    )

  }

  ngOnInit() {
  }

  //esta funcion se ejecuta cuando la pagina de cierra
  ngOnDestroy(){

    this.subscripcion.unsubscribe();
    console.log("el usuario se fue");
    
  }

  //le definimos que tipo de dato regresa la funcion
  regresaObserver(): Observable<any>{
      //vamos a crear un observable
        return new Observable( (observer:Subscriber<any>) =>{
          
          let contador =0;
    
          let interval = setInterval( ()=>{
            
            contador += 1;

            const result = {
              valor: contador
            }
    
            //con esta funcion informo de los cambios que se estan ejecutando
            observer.next( result );
    
            //controlamos el observador para que no sea infinito
            // if (contador  === 3) {
            //   clearInterval(interval);
            //   observer.complete();
            // }
            
            // if(contador === 2){
            //   // clearInterval(interval);
            //   observer.error("I need you !");
            // }
    
    
          },1000);
    
        }).pipe(
          //siempre que necesite hacer algun ajuste a la data que recibo a travez
          //de un observable, puedo hacerlo con el operador map
          map(resp =>{
            return resp.valor;
          }),
          //con filter puedo decirle cuando quiero que pase o no algo
          filter((valor, index)=>{

            //obligatorio tengo que regresar un boolean

            if ((valor % 2)===1 ) {
              
              
              //el numero es impar
              return true;
            } else {
              //el numero es par
              return false;
            }
            
          })
        );
        

    }

}
