import { Picture } from "./picture";
import { Fields } from "./fields";
import { ReportBaseJson } from "./report-base.json";
import { TbiComponent } from "./component";

export class TbiComponentJson {
    public id: string = '';
    public reports: ReportBaseJson[] = [];
    public fields: Fields = new Fields();
    public pictures: Picture[] = [];
   
    constructor(item: Partial<TbiComponent>) {
        this.id = item.id;
        this.reports = item.reports.map(r => new ReportBaseJson(r))
        this.fields = new Fields(item.fields);
        this.pictures = (item.pictures || []).map(p => new Picture(p));
    }

}