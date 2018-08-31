import { Project } from './project';
import { Picture } from "./picture";
import { Page } from 'ionic-angular/umd/navigation/nav-util';

export class ReportBase {
  public project: Project = null;
  public id: string = '';
  public name: string = '';
  public path: string = '';
  public page: Page = null;
  public fields: Fields = new Fields();
  public pictures: Picture[] = [];
  public result: Result = null;
  public relative_to: string = ''
  public get has_markers(): boolean {
    const has_markers = !!this.pictures.filter(p => !!p.has_markers).length;
    if (has_markers) this.update_surface_temp();
    return has_markers;
  }

  constructor(project: Project, item?: Partial<ReportBase>) {
    this.project = project;
    if (!!item) {
      Object.assign(this, item);
      this.fields = new Fields(item.fields);
      this.result = new Result(item.result);
      this.project = project;
    }
  }

  private update_surface_temp(): ReportBase {
    const surface_temp = this.pictures.map(p => p.surface_temp).filter(p => p !== null);
    if (surface_temp.length === 0) return;
    this.fields.surface_temp = eval(surface_temp.join('+')) / surface_temp.length
    return this;
  }

  toJSON = () => {
    const report = new ReportBase(this.project, this);
    report.page = null;
    delete (report.page);
    report.project = null;
    delete (report.project);
    return report;
  }
}

export class Fields {
  public location: string = '';
  public operational_time: number = 0;
  public surface: number = 0;
  public surface_material: number = 0;
  public ambient_temp: number = 0;
  public surface_temp: number = 0;
  public length: number = 0;
  public number: number = 0;
  public dimension: number = 0;
  public emissivity: number = 0;

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
  }
}

export class Result {
  public headLost: Value = new Value();
  public savingPotentialMin: Value = new Value();
  public savingPotentialMax: Value = new Value();
  public advise: string = '';

  constructor(result?: Partial<Result>) {
    if (!result) return;
    Object.assign(this, result);
    this.advise = result.advise;
    this.headLost = new Value(result.headLost);
    this.savingPotentialMin = new Value(result.savingPotentialMin);
    this.savingPotentialMax = new Value(result.savingPotentialMax);
  }
}

export class Value {
  public power: number = 0;
  public money: number = 0;

  constructor(value?: Partial<Value>) {
    if (!value) return;
    Object.assign(this, value);
  }
}
