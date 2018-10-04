import { ReportBase } from "./report-base";
import { Fields } from "./fields";
import { Project } from "./project";
import { Marker } from "./marker";
import { Picture } from "./picture";

export class TbiComponent {
    public id: string = '';
    public project: Project = null;
    public reports: ReportBase[] = [];
    public fields: Fields = new Fields();
    public summary_id: string;
    public markers: Marker[];

    private flatten(arr: any[]): any[] {
        return [].concat.apply([], arr);
    }

    public get pictures(): Picture[] {
        return this.flatten(this.reports.map(r => r.pictures));
    }
    public get has_markers(): boolean {
        const has_markers = !!this.markers.length && !!this.reports.find(r=>!!r.pictures.find(p=>!!p.markers_with_values.length));
        return has_markers;
    }
    public get min_temp(): number {
        return !this.has_markers ? 0 : this.markers.map(m => m.temperature).sort()[0];
    }
    public get max_temp(): number {
        return !this.has_markers ? 0 : this.markers.map(m => m.temperature).sort().reverse()[0];
    }
    public get medium_temp(): number {
        return !this.has_markers ? 0 : eval(this.pictures.filter(p => p.has_markers).map(m => m.surface_temp).join('+')) / this.pictures.filter(p => p.has_markers).length;
    }

    constructor(project: Project, item?: Partial<TbiComponent>) {
        this.project = project;
        if (!!item) {
            this.fields = new Fields(item.fields);
            this.project = project;
            this.id = item.id || Math.random().toString().substr(2);
            this.summary_id = item.summary_id;
            this.reports = (item.reports || []).map(r => new ReportBase(project, this, r));
            this.markers = (item.markers || []).map(m => new Marker(m));
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



