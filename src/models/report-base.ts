import { Project } from './project';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Result } from './result';
import { TbiComponent } from './component';
import { Picture } from './picture';
import { ICalculator } from './calculators/calculator.factory';

export class ReportBase {
  public id: string = '';
  public name: string = '';
  public path: string = '';
  public page: Page = null;
  public result: Result = null;
  public project: Project = null;
  public component?: TbiComponent = null;
  public pictures: Picture[] = [];
  public insulated: boolean = false;
  public get potential_measure(): string {
    return 'kWh/a';
  }
  public get has_markers(): boolean {
    const has_markers = !!this.pictures.filter(p => !!p.has_markers).length;
    return has_markers;
}
  public get money_measure(): string {
    return '€/a';
  }
  public get min_temp(): number {
    return !this.has_markers ? 0 : this.pictures.filter(p => p.has_markers).map(m => m.min_temp).sort()[0];
}
public get max_temp(): number {
    return !this.has_markers ? 0 : this.pictures.filter(p => p.has_markers).map(m => m.max_temp).sort().reverse()[0];
}
public get surface_temp(): number {
    return !this.has_markers ? 0 : eval(this.pictures.filter(p => p.has_markers).map(m => m.surface_temp).join('+')) / this.pictures.filter(p => p.has_markers).length;
}
  public calculator: ICalculator = null;
  
  constructor(project: Project, component?: TbiComponent, item?: Partial<ReportBase>) {
    if (!!item) {
      Object.assign(this, item);
      this.pictures = (item.pictures || []).map(p => new Picture(p));
      this.project = project;
      this.component = component;
      this.result = new Result(item.result);
    } else {
      // this.pictures = [new Picture({ 
      //   //markers: Array.apply(null, { length: 10 }).map(m => new Marker())
      //   markers: []
      // })];
    }
  }
}
