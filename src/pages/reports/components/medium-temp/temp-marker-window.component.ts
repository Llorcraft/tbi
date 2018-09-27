import { Component } from '@angular/core';
import { Marker } from './../../../../models/marker';
import { ViewController, NavParams } from 'ionic-angular';
import { Picture } from '../../../../models/picture';

@Component({
  selector: 'markers-window',
  templateUrl: './temp-marker-window.component.html'
})

export class ReportTempMarkersWindowComponent {

  protected markers: Marker[] = [];
  protected get disabled(): boolean {
    return this.markers.filter(m => m.hasValue).length === 0;
  }
  constructor(private viewCtrl: ViewController, private params: NavParams) {
    const markers = [].concat.apply([], params.data.pictures.sort((p: Picture) => !p.has_markers).map(p => p.markers));
    this.markers = markers.sort((m: Marker) => !m.hasValue).slice(0, 10);
  }

  protected calculate(): ReportTempMarkersWindowComponent {
    this.params.data.pictures.forEach((p: Picture) => p.markers = p.markers.sort(m => m.temperature).reverse());
    this.params.data.pictures.filter((p: Picture) => !!p.picture).forEach((p: Picture) => p.markers = p.markers.filter(m => m.hasValue));

    this.viewCtrl.dismiss(this.markers.filter(m => m.hasValue));
    return this;
  }
  protected close(): ReportTempMarkersWindowComponent {
    this.viewCtrl.dismiss(null);
    return this;
  }

}
