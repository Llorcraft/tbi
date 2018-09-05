import { ReportBase } from "./report-base";
import { Fields } from "./fields";
import { Value } from "./value";

export class ComponentLocation {
    public name: string;
    public section_input: SectionInput;
    public section_energy: SectionEnergy
    public reports: Map<string, ReportBase> = new Map<string, ReportBase>();
    constructor(reports: ReportBase[]) {
        ['Insulation', 'Safety', 'Maintenance', 'Custom'].forEach(key => {
            this.reports[key] = reports.filter(r => r.path.startsWith(key))
        });
        this.name = reports[0].component.fields.location;
        this.section_input = new SectionInput(reports.find(r => r.path.startsWith('Insulation')));
        this.section_energy = new SectionEnergy(reports.find(r => r.path.startsWith('Insulation')))
    }
}

class SectionInput {
    public fields: Fields;
    constructor(report: ReportBase) {
        this.fields = report.component.fields;
        // this.surface = report.fields.surface_temp;
        // this.dimension = report.fields.surface;
        // this.length = report.fields.length;
        //const x = report.fields.surface_temp
    }
}

class SectionEnergy {
    public heat_lost: Value;
    public saving_potential_min: Value;
    public saving_potential_max: Value;
    public insulated: string;
    public tbi: string;
    private advises: Map<string, string> = new Map<string, string>([
        ['System OK', 'OK'],
        ['Insulation recommended', 'Recommended']
    ])
    constructor(report: ReportBase) {
        this.heat_lost = report.result.headLost;
        this.saving_potential_max = report.result.savingPotentialMax;
        this.saving_potential_min = report.result.savingPotentialMin;
        this.insulated = report.path.startsWith('Insulation\Insulated') ? 'Yes' : 'No';
        this.tbi = this.advises.get(report.result.advise);
    }
}