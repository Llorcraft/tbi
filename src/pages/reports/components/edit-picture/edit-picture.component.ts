import { Component, Input, OnInit } from '@angular/core';
import { Picture } from '../../../../models/picture';
import { Marker } from '../../../../models/marker';
import { AlertController, AlertButton } from 'ionic-angular';

@Component({
    selector: 'edit-picture',
    templateUrl: './edit-picture.component.html'
})
export class ReportEditPictureComponent implements OnInit {
    @Input() picture: Picture;
    protected mirror_picture: Picture;

    ngOnInit() {
        this.mirror_picture = this.picture;
    }

    constructor(private alertCtrl: AlertController) {
    }

    protected create_marker(event: MouseEvent): void {
        this.show_prompt(event, null);
    }

    protected edit_marker(marker: Marker): void {
        this.show_prompt(null, marker);
    }

    private show_prompt(event: MouseEvent, marker: Marker): void {
        let alert = this.alertCtrl.create({
            title: 'Enter temperature',
            inputs: [
                {
                    name: 'temperature',
                    placeholder: 'ºC',
                    type: 'number',
                    value: !!marker ? marker.temperature.toString() : ''
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel'
                },
                {
                    text: 'Ok',
                    handler: (data) => {
                        if (data.temperature === '') return
                        if (!!marker) {
                            marker.temperature = data.temperature;
                        } else {

                            const marker_size = {
                                width: 32,
                                height: 83
                            }
                            this.mirror_picture.markers.push(new Marker({
                                x: event.offsetX - marker_size.width,
                                y: event.offsetY - marker_size.height,
                                temperature: data.temperature
                            }));
                        }
                    }
                }
            ]
        });
        if (!!marker) {
            alert.addButton({
                text: 'Remove',
                role: 'remove',
                handler: () => { this.mirror_picture.markers = this.mirror_picture.markers.filter(m => m !== marker); }
            } as AlertButton)
        }
        alert.present();
    }
}
