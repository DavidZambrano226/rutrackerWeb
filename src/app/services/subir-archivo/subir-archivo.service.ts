import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

  constructor() { }


  subirArchivo(archivo: File, tabla:string, id: string){
      
    return new Promise( (resolve,reject)=>{
      
          let fromData = new FormData();
          let xhr = new XMLHttpRequest();
          
          fromData.append('imagen', archivo, archivo.name);
      
          xhr.onreadystatechange = function(){
            
            if(xhr.readyState === 4 ){
                
              if (xhr.status === 200) {
                console.log('Imagen subida');
                resolve(JSON.parse(xhr.response));
                
              }else{
                console.log('Fallo la subida ');
                reject(xhr.response);
                
              }
      
            }
      
          };

          
          let url = URL_SERVICIOS + '/upload/' + tabla + '/' + id;

          xhr.open('PUT',url,true);
          xhr.send(fromData);


    }); 


  }

}
