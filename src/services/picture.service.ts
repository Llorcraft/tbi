import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { FileService } from './file.service';
import { MessageService } from './messages.service';

@Injectable()
export class PictureService {
    constructor(private camera: Camera, private file: FileService, private message: MessageService) { }

    public take_picture(): Promise<string> {
        return new Promise<string>((resolve) => {
            this.camera.getPicture({
                quality: 80,
                sourceType: this.camera.PictureSourceType.CAMERA,
                destinationType: this.camera.DestinationType.NATIVE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                allowEdit: false
            }).then(uri => {
                this.file.create_picture(uri)
                    .then(d => resolve(`${d.folder}/${d.file}`))
                    .catch(ex => this.message.alert('Error take picture', JSON.stringify(ex, null, 2)));
            });
        });

    }

    public get_picture(): Promise<any> {
        return new Promise<string>((resolve) => {
            this.camera.getPicture({
                quality: 80,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.NATIVE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                allowEdit: false
            }).then(uri => {
                this.file.create_picture(uri)
                    .then(d => resolve(`${d.folder}/${d.file}`))
                    .catch(ex => this.message.alert('Error take picture', JSON.stringify(ex, null, 2)));
            });
        });
    }
}