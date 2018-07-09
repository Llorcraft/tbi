import { Component } from '@angular/core';
import { Marker } from './../../../../models/marker';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'markers-window',
  templateUrl: './temp-marker-window.component.html'
})

export class ReportTempMarkersWindowComponent {

  protected markers: Marker[] = [];
  protected get disabled(): boolean {
    return this.markers.filter(m => m.hasValue).length === 0;
  }
  constructor(private viewCtrl: ViewController, params: NavParams) {
    this.markers = Array.apply(null, { length: 10 })
      .map(p => new Marker({ temperature: null }));
  }

  protected calculate(): ReportTempMarkersWindowComponent {
    this.viewCtrl.dismiss(this.markers.filter(m => m.hasValue));
    return this;
  }
  protected close(): ReportTempMarkersWindowComponent {
    this.viewCtrl.dismiss(null);
    return this;
  }

}
