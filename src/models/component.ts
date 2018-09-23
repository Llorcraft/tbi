import { ReportBase } from "./report-base";
import { Picture } from "./picture";
import { Fields } from "./fields";
import { Project } from "./project";
import { REPORT } from "../const";
import { ReportSurface, ReportFlange, ReportPipe, ReportValve } from "./reports";
import { ReportGeneric } from "./reports/report-generic.class";

export class TbiComponent {
    public id: string = '';
    public project: Project = null;
    public reports: ReportBase[] = [];
    public fields: Fields = new Fields();
    public get pictures(): Picture[] {
        return this.reports.map(r => r.pictures).reduce((a, b) => [...a, ...b], []);
    };
    public get has_markers(): boolean {
        const has_markers = !!this.pictures.filter(p => !!p.has_markers).length;
        return has_markers;
    }
    public get images(): Picture[] {
        return this.pictures.filter(p => !!p.picture);
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

    constructor(project: Project, item?: Partial<TbiComponent>) {
        this.project = project;
        if (!!item) {
            this.fields = new Fields(item.fields);
            this.project = project;
            this.id = item.id || Math.random().toString().substr(2);
            this.reports = (item.reports || []).map(r => new ReportBase(project, this, r));
        }
    }
    // private update_surface_temp(): TbiComponent {
    //     const surface_temp = this.pictures.map(p => p.surface_temp).filter(p => p !== null);
    //     if (surface_temp.length === 0) return;
    //     this.fields.surface_temp = eval(surface_temp.join('+')) / surface_temp.length
    //     return this;
    // }

    public get_reports_by_type(type: string): ReportBase[] {
        return this.reports.filter(r => !!r.path.match(new RegExp(type, 'gi')));
    }

}



