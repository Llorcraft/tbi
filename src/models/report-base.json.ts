import { Result } from './result';
import { ReportBase } from './report-base';
import { Picture } from './picture';

export class ReportBaseJson {
  public id: string = '';
  public name: string = '';
  public path: string = '';
  public result: Result = null;
  public pictures: Picture[] = [];


  constructor(item: Partial<ReportBase>) {
      this.id = item.id;
      this.name = item.name;
      this.path = item.path;
      this.result = new Result(item.result);
      this.pictures = (item.pictures || []).map(p => new Picture(p));

  }
}
