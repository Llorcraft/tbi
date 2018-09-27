import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CameraService {
    constructor(private camera: Camera) { }

    public take_picture(): Subject<string> {
        const promise = new Subject<string>();
        let options: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: false
        };
        this.camera.getPicture(options).then(d => promise.next('data:image/jpeg;base64,' + d));
        return promise;
    }
}