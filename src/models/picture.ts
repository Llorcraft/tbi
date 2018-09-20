import { Marker } from "./marker";
import { ModelWithPicture } from "./model-with-picture";

export class Picture extends ModelWithPicture {
  public markers: Marker[] = [];
  public get has_markers(): boolean {
    return !!this.markers.filter(m => m.hasValue).length;
  }
  public get min_temp(): number {
    return !this.has_markers ? null : this.markers.filter(m => m.hasValue).map(m => m.temperature).sort()[0];
  }
  public get max_temp(): number {
    return !this.has_markers ? null : this.markers.filter(m => m.hasValue).map(m => m.temperature).sort().reverse()[0];
  }
  public get surface_temp(): number {
    return !this.has_markers ? null : eval(this.markers.filter(m => m.hasValue).map(m => m.temperature).join('+')) / this.markers.filter(m => m.hasValue).length;
  }
  constructor(item?: Partial<Picture>) {
    super(item)
    if (!!item) {
      Object.assign(this, item);
      this.markers = (item.markers || []).map((m: Marker) => new Marker(m));
    }
  }
}
