import { Marker } from "./marker";

export class Picture {
  public src: string = '';
  public markers: Marker[] = [];
  public get has_markers(): boolean {
    return !!this.markers.length;
  }
  public get surface_temp(): number {
    return !this.markers.length ? null : eval(this.markers.map(m => m.temperature).join('+')) / this.markers.length;
  }
  constructor(item?: Partial<Picture>) {
    if (!!item) {
      Object.assign(this, item);
      this.markers = (item.markers || []).map((m: Marker) => new Marker(m));
    }
  }
}
