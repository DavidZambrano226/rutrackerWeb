import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {
  
  //Insertamos una acceso al Dom a todo el documento para poder cambar el tema

  constructor(public _ajustes:SettingsService) {
    
  }

  ngOnInit() {
  
    this.colocarCheck();

  }
    
  cambiarColor( tema:string, link:any){
   
    this.aplicarCheck(link);

    this._ajustes.aplicarTema(tema);

    
    
  }
  aplicarCheck(link:any){
    //hacemos un arreglo con cada uno de los elementos que tengan la clase selector
    let selectores:any = document.getElementsByClassName('selector');
    
    //recorremos ese arreglo
    for (let ref of selectores ) {
    
      
      //removemos todas las clases workin que es el check que pone sobre el cuadro
      ref.classList.remove('working');
      
    }
    link.classList.add('working');
  }

  colocarCheck(){
    
    
    let selectores:any = document.getElementsByClassName('selector');
    
    let tema = this._ajustes.ajustes.tema;
    

    for (let ref of selectores){
      
      
      
      if (ref.getAttribute('data-theme') === tema) {
        
        
        ref.classList.add('working');
        break;

      } 

    }
  }
  

}
