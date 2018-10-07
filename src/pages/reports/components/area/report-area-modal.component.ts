import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'area-modal',
  templateUrl: './report-area-modal.component.html'
})
export class ReportAreaModalComponent {
  protected radius?: number = null;
  protected height?: number = null;
  protected width?: number = null;
  protected deep?: number = null;
  protected segment = {
    value: 'cube',
    cube: 0,
    cilinder: 1,
    circle: 2
  };

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad(){
    this.on_segment_change();
  }
  protected close(): ReportAreaModalComponent {
    this.viewCtrl.dismiss(null);
    return this;
  }

  private get_surface(): number {
    switch (this.segment.value) {
      case 'cilinder':
        return 2 * Math.PI * (this.radius || 0) * (this.height || 0);
      case 'circle':
        return Math.PI * Math.sqrt(this.radius || 0);
      case 'rectangle':
        return (this.width || 0) * (this.height || 0);
      default:
        return 2 * ((this.width || 0) * (this.height || 0) + (this.deep || 0) * (this.height || 0));
    }
  }

  protected calculate(): ReportAreaModalComponent {
    this.viewCtrl.dismiss(Number(this.get_surface().toFixed(2)));
    return this;
  }

  protected on_segment_change() {
  }
}
