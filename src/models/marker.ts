export class Marker {
  public x: number = 0;
  public y: number = 0;
  public temperature: number = 0;
  public get hasValue(): boolean {
    return !(null === this.temperature
      || 'undefined' === typeof this.temperature
      || '' === this.temperature.toString());
  }

  public get position(): string {
    return `translate(${this.x}px,${this.y}px)`;
  };
  public get transform(): string {
    return `matrix(1 0 0 1 ${this.temperature.toString().length === 1 ? 150 : this.temperature.toString().length === 2 ? 120 : 90} 228)`;
  }
  public get color(): string {
    return this.temperature < 0
      ? 'cold'
      : this.temperature < 100
        ? 'templade'
        : 'warm';
  }
  constructor(item?: Partial<Marker>) {
    if (!!item) {
      Object.assign(this, item);
    }
  }
}
