import { Component, ViewChild } from '@angular/core';
import { ViewController, Slides, Segment } from 'ionic-angular';


@Component({
  selector: 'area-modal',
  templateUrl: './report-area-modal.component.html'
})
export class ReportAreaModalComponent{
  protected radius = 0;
  protected height = 0;
  protected width = 0;
  protected deep = 0;
  protected segment = {
    value: 'cube',
    cube: 0,
    cilinder: 1,
    circle: 2
  };
  @ViewChild(Slides) slides: Slides;

  constructor(private viewCtrl: ViewController) {
  }

  protected set_active_segment(): ReportAreaModalComponent{
    this.segment.value = ['cube', 'cilinder', 'circle'][this.slides.getActiveIndex()];
    return this;
  }
  protected close(): ReportAreaModalComponent {
    this.viewCtrl.dismiss(null);
    return this;
  }

  private get_surface(): number {
    switch (this.slides.getActiveIndex()) {
      case 1:
        return 2 * Math.PI * this.radius * this.height;
      case 2:
        return Math.PI * Math.sqrt(this.radius);
      default:
        return 2 * (this.width * this.deep + this.width * this.height + this.deep * this.height);
    }
  }

  protected calculate(): ReportAreaModalComponent {
    this.viewCtrl.dismiss(Number(this.get_surface().toFixed(2)));
    return this;
  }

  protected segmentChanged(selected: Segment): ReportAreaModalComponent {
    this.slides.slideTo(this.segment[selected.value]);
    return this;
  }
}
