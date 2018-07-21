import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

    //ejecutamos la promesa para ver si todo salio bien con el then, de lo contrario usamo el cathc
    this.contarTres().then(
      mensaje=> console.log('Termino',mensaje)
           
    )
    .catch(error => console.error('Error en la promesa', error)
      
    );


  

  }

  ngOnInit() {
  }

  contarTres():Promise<boolean>{

    return new Promise( (resolve, reject)=>{
      
      let contador = 0;
      //esta es una funcion de javascript que permite ejecutar algo en cierto espacio de tiempo 
      let intervalo = setInterval( ()=>{
        contador +=1;
        console.log(contador);
        
        
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }

      },1000 ); 
    
    });  
    
    

  }
}
