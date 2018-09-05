import { More } from "../const/more/more";

export class Fields {
    public location: string = '';
    public operational_time?: number = null;
    public surface?: number = null;
    public surface_material?: number = null;
    public surface_material_index?: number = null;
    public get surface_material_friendly ():string {
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
  
    constructor(f?: Partial<Fields>) {
      if (!f) return;
      this.location = f.location;
      this.operational_time = Number(f.operational_time || '0') || null;
      this.surface = Number(f.surface || '0') || null;
      this.surface_material = Number(f.surface_material || '0') || null;
      this.ambient_temp = Number(f.ambient_temp || '0') || null;
      this.surface_temp = Number(f.surface_temp || '0') || null;
      this.length = Number(f.length || '0') || null;
      this.number = Number(f.number || '0' || '0') || null;
      this.dimension = Number(f.dimension || '0') || null;
      this.emissivity = Number(f.emissivity || '0') || null;
      this.leakage = f.leakage;
    }
  }
  