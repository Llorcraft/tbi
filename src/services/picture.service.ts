import { Injectable } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { FileService } from './file.service';
import { MessageService } from './messages.service';
import { Picture } from '../models/picture';
import { normalizeURL, Platform } from 'ionic-angular';
import { FileLocalService } from './file-local.service';

@Injectable()
export class PictureService {
    constructor(private camera: Camera, private file: FileService, private message: MessageService, private platform: Platform) { }

    public take_picture(): Promise<string> {
        if (this.file instanceof FileLocalService) return this.load_picture();

        return new Promise<string>((resolve) => {
            this.camera.getPicture({
                quality: 80,
                sourceType: this.camera.PictureSourceType.CAMERA,
                //destinationType: this.camera.DestinationType.NATIVE_URI,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                allowEdit: false
            }).then(uri => {
                //resolve(this.platform.is('ios') ? normalizeURL(uri) : `data:image/jpeg;base64,${uri}`);
                resolve(`data:image/jpeg;base64,${uri}`);
                // this.file.create_picture(uri)
                //     .then(d => {
                //         resolve(`${d.folder}/${d.file}`)
                //         //resolve(this.platform.is('ios') ? normalizeURL(uri) : `data:image/jpeg;base64,${uri}`)
                //     })
                //     .catch(ex => this.message.alert('Error take picture', JSON.stringify(ex, null, 2)));
            });
        });

    }

    public get_picture(): Promise<any> {
        return new Promise<string>((resolve) => {
            this.camera.getPicture({
                quality: 80,
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                allowEdit: false
            }).then(uri => {
                resolve(`data:image/jpeg;base64,${uri}`);
                // this.file.create_picture(uri)
                //     .then(d => {
                //         resolve(`${d.folder}/${d.file}`)
                //         //resolve(this.platform.is('ios') ? normalizeURL(uri) : `data:image/jpeg;base64,${uri}`)
                //     })
                //     .catch(ex => this.message.alert('Error take picture', JSON.stringify(ex, null, 2)));
            });
        });
    }

    public delete_picture(picture: Picture): Promise<Picture> {
        return new Promise<Picture>((resolve, reject) => {
            this.file.delete(picture);
            resolve(picture);
        })
    }

    private load_picture(): Promise<string> {
        let self = this;
        return new Promise<string>(resolve => {
            let reader = new FileReader();
            let input = document.createElement('input');
            input.type = "file";

            reader.onload = async function () {
                document.body.removeChild(input);
                resolve(this.result as string);
            };

            input.onchange = function () {
                reader.readAsDataURL(input.files[0]);
            };

            document.body.appendChild(input);
            input.click();
        });
    }
}