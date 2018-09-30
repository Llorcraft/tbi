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
  public medium_temp?: number = null;
  public length?: number = null;
  public number?: number = null;
  public dimension?: number = null;
  public emissivity?: number = null;
  public leakage: string = '';
  public nominal_diameter?: number = null;
  public main_dimension: boolean = false;
  public damaged_cladding_selection: number = null;
  public damaged_cladding_other: string = '';
  public damaged_insulation_selection: number = null;
  public damaged_insulation_other: string = '';
  public condensation_selection: number = null;
  public condensation_other: string = '';

  private _damaged_cladding: boolean = false
  public get damaged_cladding(): boolean {
    return this._damaged_cladding;
  };
  public set damaged_cladding(value: boolean) {
    this._damaged_cladding = value;
    if (!!value)
      this.damaged_insulation = false;
    this.damaged_insulation_selection = null;
    this.damaged_insulation_other = '';
  };

  private _damaged_insulation: boolean = false
  public get damaged_insulation(): boolean {
    return this._damaged_insulation;
  };
  public set damaged_insulation(value: boolean) {
    this._damaged_insulation = value;
    if (!!value)
      this.damaged_cladding = false;
    this.damaged_cladding_selection = null;
    this.damaged_cladding_other = '';
  };


  constructor(f?: Partial<Fields>) {
    if (!f) return;
    this.location = f.location;
    this.operational_time = this.number_or_null(f.operational_time);
    this.surface = this.number_or_null(f.surface);
    this.surface_material = this.number_or_null(f.surface_material);
    this.ambient_temp = this.number_or_null(f.ambient_temp);
    this.surface_temp = this.number_or_null(f.surface_temp);
    this.medium_temp = this.number_or_null(f.medium_temp);
    this.length = this.number_or_null(f.length);
    this.number = this.number_or_null(f.number);
    this.dimension = this.number_or_null(f.dimension);
    this.emissivity = this.number_or_null(f.emissivity);
    this.nominal_diameter = this.number_or_null(f.nominal_diameter);
    this.leakage = f.leakage;
    this.main_dimension = !!f.main_dimension;
    this.damaged_cladding = !!f.damaged_cladding;
    this.damaged_insulation = !!f.damaged_insulation;
    this.damaged_cladding_selection = this.number_or_null(f.damaged_cladding_selection);
    this.damaged_cladding_other = f.damaged_cladding_other || '';
    this.damaged_insulation_selection = this.number_or_null(f.damaged_insulation_selection);
    this.damaged_insulation_other = f.damaged_insulation_other;
    this.condensation_selection = this.number_or_null(f.condensation_selection);
    this.condensation_other = f.condensation_other || ''
  }

  private number_or_null(value?: number | string): number {
    if (value === null || value === '' || typeof value === 'undefined') return null;
    if (isNaN(Number(value))) return null;
    return Number(value);
  }
}
