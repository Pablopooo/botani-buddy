import { Injectable } from '@angular/core';
import {Camera, CameraResultType, CameraSource} from '@capacitor/camera';


@Injectable({
  providedIn: 'root'
})
export class FotosService {

  fotos: string[] = [];

  constructor() { }

  async addNewPhoto(){
    const photo= await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
          quality: 100
    });
    if (photo.webPath){
      this.fotos.unshift(photo.webPath);
    }
  }
}
