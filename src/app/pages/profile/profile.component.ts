import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario:Usuario

  imagenSubir: File;
  imagenTemp:string;

  constructor(public _usuService:UsuarioService) { 
    
    this.usuario = this._usuService.usuario;

  }

  ngOnInit() {
  }

  guardar(usuario:Usuario){

    this.usuario.nombre = usuario.nombre;
    
    if (!this.usuario.google) {
      this.usuario.email = usuario.email;
      
    }


    this._usuService.actualizarUsuario(this.usuario).subscribe();

  }


  seleccionImagen( archivo:File){
    
    if(!archivo){
      this.imagenSubir = null;
      return;
    }

    if (archivo.type.indexOf('image') < 0) {
      swal('Sólo Imagenes','El archivo seleccionado no es una imagen','error');
      this.imagenSubir = null;
      return;
    }

    this.imagenSubir = archivo;

    //con estas lineas de javascript nativo visualizamos la imagen antes

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL(archivo);

    reader.onloadend = ()=>{
      this.imagenTemp = reader.result;
    }
    
  }

  cambiarImagen(){
    this._usuService.cambiarImagen(this.imagenSubir, this.usuario._id);
  }


}
