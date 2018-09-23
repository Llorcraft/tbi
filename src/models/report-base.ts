import { Project } from './project';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { Result } from './result';
import { TbiComponent } from './component';
import { Picture } from './picture';
import { Marker } from './marker';
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
  public get potential_measure(): string {
    return 'kWh/a';
  }
  public get money_measure(): string {
    return '€/a';
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
      this.pictures = [new Picture({ markers: Array.apply(null, { length: 10 }).map(m => new Marker()) })];
    }
  }
}
