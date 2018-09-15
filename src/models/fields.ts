import { More } from "../const/more/more";

export class Fields {
  public location: string = '';
  public operational_time?: number = null;
  public surface?: number = null;
  public surface_material?: number = null;
  public surface_material_index?: number = null;
  public get surface_material_friendly(): string {
    const material = More.MATERIALS.find(t => t[1] == this.surface_material_index);
    return !!material ? `${material[0]}` : `${this.surface_material || ''}`;
  }
  public ambient_temp?: number = null;
  public surface_temp?: number = null;
  public length?: number = null;
  public number?: number = null;
  public dimension?: number = null;
  public emissivity?: number = null;
  public leakage: string = '';
  public nominal_diameter?: number = null;

  constructor(f?: Partial<Fields>) {
    if (!f) return;
    this.location = f.location;
    this.operational_time = this.number_or_null(f.operational_time);
    this.surface = this.number_or_null(f.surface);
    this.surface_material = this.number_or_null(f.surface_material);
    this.ambient_temp = this.number_or_null(f.ambient_temp);
    this.surface_temp = this.number_or_null(f.surface_temp);
    this.length = this.number_or_null(f.length);
    this.number = this.number_or_null(f.number);
    this.dimension = this.number_or_null(f.dimension);
    this.emissivity = this.number_or_null(f.emissivity);
    this.nominal_diameter = this.number_or_null(f.nominal_diameter);
    this.leakage = f.leakage;
    debugger;
  }

  private number_or_null(value?: number | string): number{
    if(value === null || value === '' || typeof value === 'undefined') return null;
    if(isNaN(Number(value))) return null;
    return Number(value);
  }
}
