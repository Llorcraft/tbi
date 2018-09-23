import { Value } from "../value";
import { Result } from "../result";
import { ReportBase } from "../report-base";

export class BaseCalculator {
    constructor(protected report: ReportBase, protected fnc: Function[]) { }

    public hr: number = 1;
    public hcv: number = 1;
    public hcv_laminar: number = 1;
    public hcv_laminar_min: number = 1;
    public hcv_laminar_max: number = 1;
    public hse: number = 1;
    public q: number = 1;
    public q_min: number = 1;
    public q_max: number = 1;
    public qref_pb: number = 1;
    public ql: number = 1;
    public ql_ref_pb: number = 1;
    public Qkwh: number = 1;
    public Qkwh_min: number = 1;
    public Qkwh_max: number = 1;
    public Qε: number = 1;
    public Qε_min: number = 1;
    public Qε_max: number = 1;
    public θm_min: number = 1;
    public θm_max: number = 1;
    public λm_min: number = 1;
    public λm_max: number = 1;
    public λm_mim: number = 1;
    public λdes_min: number = 1;
    public λdes_max: number = 1;
    public Savingkwh_min: number = 1;
    public Savingkwh_max: number = 1;
    public Savingε_min: number = 1;
    public Savingε_max: number = 1;
    public a: number = 0.0338;
    public b: number = 0.0001173;
    public c: number = 0.00000007545;
    public Cpb_surface_pipe: number = 1.6;
    public Cpb_valve_flange: number = 5;
    public d: number = 0.0000000007109;
    public Ft: number = 1.5;
    public Δθ: number = 1;
    public e_min: number = 1;
    public e_max: number = 1;
    public hse_min: number = 0;
    public hse_max: number = 0;
    public hcv_turbulent: number = 1;
    public Rse_min: number = 1;
    public Rse_max: number = 1;
    public Rins_min: number = 1;
    public Rins_max: number = 1;
    public Insulation_advice: string = '';
    public minimum_potential_explanation = '';
    public lort: number = 1;
    public lort_min: number = 1;
    public lort_max: number = 1;
    public get De(): number {
        const range = [
            [10, 0.018],
            [15, 0.022],
            [20, 0.027],
            [25, 0.034],
            [32, 0.043],
            [40, 0.049],
            [50, 0.061],
            [60, 0.072],
            [65, 0.077],
            [80, 0.089],
            [100, 0.115],
            [125, 0.141],
            [150, 0.169],
            [200, 0.220],
            [250, 0.273],
            [300, 0.324],
            [350, 0.356],
            [400, 0.407],
            [450, 0.458],
            [500, 0.508],
            [600, 0.610],
            [700, 0.712],
            [800, 0.813],
            [900, 0.915],
            [1000, 1.016],
            [1100, 1.120],
            [1200, 1.220],
            [1400, 1.420],
            [1500, 1.520],
            [1600, 1.620],
            [1800, 1.820],
            [2000, 2.020],
            [2000, 2.020],
            [2200, 2.220],
            [2400, 2.420],
            [2600, 2.620],
            [2800, 2.820],
            [3000, 3.020],
            [3200, 3.220],
            [3400, 3.420]
        ]
        const filter = range.find(r => r[0] > this.DN);
        return filter ?
            range.lastIndexOf(filter) > 0 ? range[range.lastIndexOf(filter) - 1][1] : range[0][1] : 0;
    };
    public De_min: number = 1;
    public De_max: number = 1;
    public Sp: number = 1;
    public Rle: number = 1;
    public ql_min: number = 1;
    public ql_max: number = 1;
    public Rle_min: number = 1;
    public Rle_max: number = 1;
    /*Report and Project propesties*/
    public δ: number = 0.00000005670367;
    public θse = Number(this.report.component.fields.surface_temp);
    public θa = Number(this.report.component.fields.ambient_temp);
    public Ot = Number(this.report.component.fields.operational_time);
    public ε = Number(this.report.component.fields.surface_material);
    public Σ = Number(this.report.component.project.price);
    public S = Number(this.report.component.fields.surface || 1);
    public l = Number(this.report.component.fields.length || this.default_length);
    public n = Number(this.report.component.fields.number);
    public DN = Number(this.report.component.fields.nominal_diameter || 0);

    public get default_length(): number {
        return 1;
    }

    protected get_l(index: number) {
        throw ('Not implemented');
    }

    public execute(): ReportBase {
        this.fnc.forEach(f => f.apply(this));
        console.table({
            // '07 => this.θm_min': this.θm_min,
            // '08 => this.θm_max': this.θm_max,
            // '09 => this.λm_min': this.λm_min,
            // '10 => this.λm_max': this.λm_max,
            // '11 => this.λdes_min': this.λdes_min,
            // '12 => this.λdes_max': this.λdes_max,
            // '36 => this.De_min': this.De_min,
            // '37 => this.De_max': this.De_max,
            // '38 => this.Rins_min': this.Rins_min,
            // '39 => this.Rins_max': this.Rins_max,
            // '45 => this.ql_min': this.ql_min,
            // '46 => this.ql_max': this.ql_max,
            'l': this.l,
            '44 => this.Qkwh': this.Qkwh,
            '44min => this.Qkwh_min': this.Qkwh_min,
            '44max => this.Qkwh_max': this.Qkwh_max,
            '48 => this.ql_ref_pb': this.ql_ref_pb,
            '06 => this.Qε': this.Qε,
            '24 => this.Qε_min': this.Qε_min,
            '25 => this.Qε_max': this.Qε_max,
            '26 => this.Savingkwh_min': this.Savingkwh_min,
            '27 => this.Savingkwh_max': this.Savingkwh_max,
            '28 => this.Savingε_min': this.Savingε_min,
            '29 => this.Savingε_max': this.Savingε_max,
        })
        this.report.result = new Result({
            advise: this.Insulation_advice,
            headLost: new Value({
                power: this.Qkwh,
                money: this.Qε
            }),
            savingPotentialMin: new Value({
                power: this.Savingkwh_min,
                money: this.Savingε_min
            }),
            savingPotentialMax: new Value({
                power: this.Savingkwh_max,
                money: this.Savingε_max
            })
        });
        return this.report;
    }

}
