import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { MessageService } from './messages.service';

@Injectable()
export class PictureService {
    constructor(private camera: Camera, private message: MessageService) {
    }

    /**
     * 
     * @param edit Edit picture after take/select it
     * @param quality Picture quality 0-100
     * @param sourceType Camera or Photo library
     */
    private get_options(edit: boolean, quality: number, sourceType: number): CameraOptions {
        return {
            quality: quality,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            allowEdit: edit
        } as CameraOptions;
    }

    /**
     * Take picture from device camera
     * @param edit Edit picture after take it
     * @param quality Picture quality 0-100
     */
    public take_picture(edit?: boolean, quality?: number): Promise<any> {

        return this.camera.getPicture(this.get_options(!!edit, this.camera.PictureSourceType.CAMERA, quality || 100))
            .then(d => 'data:image/jpeg;base64,' + d)
            .catch(ex => {
                this.message.alert('Error take picture', JSON.stringify(ex, null, 2));
            });

    }

    /**
     * Select picture from picture gallery
     * @param edit Edit picture after select it
     * @param quality Picture quality 0-100
     */
    public get_picture(edit?: boolean, quality?: number): Promise<any> {
        return this.camera.getPicture(this.get_options(!!edit, this.camera.PictureSourceType.PHOTOLIBRARY, quality || 100))
            .then(d => 'data:image/jpeg;base64,' + d)
            .catch(ex => {
                this.message.alert('Error get picture', JSON.stringify(ex, null, 2));
            });
    }
}