import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/service.index';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';

declare var swal:any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde:number = 0;
  totalRegistros:number = 0;

  cargando:boolean = true;

  constructor(public _usuService:UsuarioService, public _modalUploadService:ModalUploadService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe(resp =>{
      this.cargarUsuarios();
    })
  }

  mostrarModal(id:string){
    this._modalUploadService.mostrarModal('usuarios',id);
  }

  cargarUsuarios(){
    this.cargando = true;

    this._usuService.cargarUsuarios(this.desde).subscribe((resp:any)=>{
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;
      
    })

    this.cargando = false;

  }
  cambiarDesde(valor:number){
    let desde = this.desde + valor;


    if (desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
    
  }
  buscarUsuario(termino:string){
    
    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this._usuService.buscarUsuarios(termino).subscribe((usuarios:Usuario[])=>{
      this.usuarios = usuarios;
      this.cargando = false;
      
    })
    
  }
  borrarUsuario(usuario:Usuario){
    if (usuario._id === this._usuService.usuario._id) {
      swal('No puede borrar el usuario', 'No puede borrarse a si mismo', 'error');
      return;
    }
    swal({
      title: "¿Esta seguro?",
      text: "Esta a punto de borrar a " +usuario.nombre,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((borrar) => {

      console.log(borrar);

      if (borrar) {
        this._usuService.borrarUsuario( usuario._id)
              .subscribe( borrado =>{
                console.log(borrado);
                
                this.cargarUsuarios();
              })
      }
      
    });
    
  }

  guardarUsuario(usuario:Usuario){
    this._usuService.actualizarUsuario(usuario).subscribe();
  }

}
