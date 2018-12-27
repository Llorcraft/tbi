import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoadindService {
    private loading: Loading;
    constructor(private loadingCtrl: LoadingController) {
    }

    show(message?: string) {
        if(!!this.loading) return;
        this.loading = this.loadingCtrl.create({
            spinner: 'crescent',
            enableBackdropDismiss: false,
            showBackdrop: true,
            content:message || 'Loading, please wait...',
            dismissOnPageChange: true
        });
        this.loading.present();
    }

    hide(wait: number = 0) {
        setTimeout(() => {
            if(!this.loading) return;
            this.loading.dismissAll();
            this.loading = null;
        }, wait);
    }

}