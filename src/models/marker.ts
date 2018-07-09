export class Marker {
  public x: number = 0;
  public y: number = 0;
  public temperature: number = 0;
  public get hasValue(): boolean {
    return !(null === this.temperature
      || 'undefined' === typeof this.temperature
      || '' === this.temperature.toString());
  }
  constructor(item?: Partial<Marker>) {
    if (!!item) {
      Object.assign(this, item);
    }
  }
}
