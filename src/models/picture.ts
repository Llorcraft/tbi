import { Marker } from "./marker";

export class Picture {
  public src: string = '';
  public markers: Marker[] = [];

  constructor(item?: Partial<Picture>){
    if(!!item) {
      Object.assign(this, item);
      this.markers = (item.markers || []).map((m: Marker) => new Marker(m));
    }
  }
}
