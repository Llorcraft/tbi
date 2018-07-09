import { Project } from './project';
import { Marker } from './marker';
import { Picture } from "./picture";
import { Page } from 'ionic-angular/umd/navigation/nav-util';

export class ReportBase {
  public project: Project = null;
  public id: number;
  public name: string = '';
  public path: string = '';
  public page: Page = null;
  public fields: Fields = new Fields();
  public pictures: Picture[] = [];

  constructor(project: Project, item?: Partial<ReportBase>) {
    this.project = project;
    if (!!item) {
      Object.assign(this, item);
      this.fields = new Fields(item.fields);
    }
  }

  toJSON = () => {
    this.page = null;
    delete (this.page);
    this.project = null;
    delete(this.project);
    return this;
  }
}

export class MediumTemp {
  public value?: number = 0;
  public markers: Marker[] = [];
  public pictures: Picture[] = [];

  constructor(mt?: Partial<MediumTemp>) {
    if (!mt) return;
    Object.assign(this, mt);
    this.markers = (mt.markers || []).map(m => new Marker(m));
    this.pictures = (mt.pictures || []).map(m => new Picture(m));
  }
}

class Fields {
  public location: string = '';
  public operational_time: number = 0;
  public surface: number = 0;
  public surface_material: number = 0;
  public ambient_temp: number = 0;
  public surface_temp: number;

  constructor(f?: Partial<Fields>) {
    if (!f) return;
    Object.assign(this, f);
  }
}
