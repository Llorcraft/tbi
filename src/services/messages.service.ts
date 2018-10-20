import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Injectable()
export class MessageService {
    constructor(private alertCtrl: AlertController){}

    alert(title: string, message: string){
        let confirm = this.alertCtrl.create({
            //title: title,
            message: message,
            buttons: [
              {
                text: 'Agree'
              }
            ]
          });
          confirm.present();
    }
}