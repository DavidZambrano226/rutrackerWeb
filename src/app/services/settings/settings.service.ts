import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default-dark.css',
    tema:'default-dark'
  }

  constructor(@Inject(DOCUMENT) private _document) { 
    
    this.cargarAjustes();
    
  }

  guardarAjustes(){
    
    
    localStorage.setItem('settings', JSON.stringify(this.ajustes) );
  }

  cargarAjustes(){
    if (localStorage.getItem('settings')) {

      this.ajustes = JSON.parse(localStorage.getItem('settings'));
      

      this.aplicarTema(this.ajustes.tema);
      
    } else {
      
      this.aplicarTema(this.ajustes.tema);
      
    }
  }

  aplicarTema(tema:string){

    // con la siguiente instruccion conseguimos cambiar el tema a la app completamente
    let url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href',url);

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();

  }

  
}

interface Ajustes{
  temaUrl:string;
  tema:string;
}