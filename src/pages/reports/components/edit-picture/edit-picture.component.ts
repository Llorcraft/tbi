import { Component, Input} from '@angular/core';
import { Picture } from '../../../../models/picture';
import { Marker } from '../../../../models/marker';
import { AlertController, AlertButton } from 'ionic-angular';
import { ReportBase } from '../../../../models';

@Component({
    selector: 'edit-picture',
    templateUrl: './edit-picture.component.html'
})
export class ReportEditPictureComponent {
    @Input() picture: Picture;
    @Input() report: ReportBase;
    private max_markers: number = 10;

    constructor(private alertCtrl: AlertController) {
    }

    protected create_marker(event: MouseEvent): void {
        if ((this.report.component.markers.length + this.picture.markers.length) < this.max_markers) {
            this.show_prompt(event, null);
        } else {
            let alert = this.alertCtrl.create({
                title: 'Temperature',
                message: `This component already has ${this.max_markers} temperature markers`,
                cssClass: `ion-dialog-horizontal`,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel'
                    }
                ]
            })
            alert.present();
        }
    }

    protected edit_marker(marker: Marker): void {
        this.show_prompt(null, marker);
    }

    private show_prompt(event: MouseEvent, marker: Marker): void {
        let alert = this.alertCtrl.create({
            title: 'Enter temperature',
            cssClass: `ion-dialog-horizontal`,
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
                            this.picture.markers.push(new Marker({
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
                handler: () => { this.picture.markers = this.picture.markers.filter(m => m !== marker); }
            } as AlertButton)
        }
        alert.present();
    }
}
