import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, tabla: string = 'usuario'): any {
    
    let url = URL_SERVICIOS + '/img';

    if (!img) {
      //si no recibo imagen mando cualquier cosa al servicio rest para traer el noImage
      return url + '/usuarios/xxx';
    }

    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tabla) {
        case 'usuario':
           url += '/usuarios/'+img;
        break;
        case 'medico':
           url += '/medicos/'+img;
        break;
        case 'hospital':
           url += '/hospitales/'+img;
        break;    
      default:
        console.log('tipo de imagen no existe, usuarios, medicos, hospitales');
        url += '/usuarios/xxx';
                
        break;
    }
    return url;
    
  }

}
