import { ReportBase } from "./report-base";
import { Picture } from "./picture";
import { Fields } from "./fields";
import { Project } from "./project";
import { Marker } from "./marker";

export class TbiComponent {
    public id: string = '';
    public project: Project = null;
    public reports: ReportBase[] = [];
    public fields: Fields = new Fields();
    public pictures: Picture[] = [];
    public get has_markers(): boolean {
        debugger;
        const has_markers = !!this.pictures.filter(p => !!p.has_markers).length;
        //if (has_markers) this.update_surface_temp();
        return has_markers;
    }
    public get images(): Picture[] {
        return this.pictures.filter(p => !!p.src);
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
        this.pictures = [new Picture({ markers: Array.apply(null, { length: 10 }).map(m => new Marker()) })];
        if (!!item) {
            Object.assign(this, item);
            this.fields = new Fields(item.fields);
            this.project = project;
            this.pictures = this.pictures.concat((item.pictures || []).map(p => new Picture(p)));
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

    toJSON = () => {
        const component = new TbiComponent(this.project, this);
        component.project = null;
        delete (component.project);
        return component;
    }
}