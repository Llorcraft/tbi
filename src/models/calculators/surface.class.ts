import { ICalculator } from "./calculator.factory";
import { ReportBase } from "../report-base";

export class SurfaceDecorator implements ICalculator {
    public calculate(report: ReportBase): ReportBase {
        new Calculator(report).execute();
        return report;
        // let Ø = 1;
        // let ε
        // let hr = Calc.BOLTZMANN
        //     * report.fields.surface_material
        //     * ((Math.pow((report.fields.surface_temp + Calc.HR_FIXED), Calc.HR_POW)
        //         - Math.pow((report.fields.ambient_temp + Calc.HR_FIXED), Calc.HR_POW)))
        //     / (report.fields.surface_temp - report.fields.ambient_temp);
        // let hcv = Calc.HCV_FIXED
        //     * Math.pow(Math.abs(report.fields.surface_temp - report.fields.ambient_temp), Calc.HCV_POW);
        // let hse = hr + hcv;
        // let q3 = hse * Math.abs(report.fields.surface_temp - report.fields.ambient_temp);
        // let kWh = q3
        //     * report.fields.operational_time
        //     * report.fields.surface
        //     / Calc.KWH;
        // let cost = kWh * report.project.price;
        //let sq3 = Math.abs(report.fields.surface_temp - report.fields.ambient_temp) / (1 / hse + 1)

        // console.table({
        //     hr: hr.toFixed(2),
        //     hcv: hcv.toFixed(2),
        //     hse: hse.toFixed(2),
        //     q3: q3.toFixed(0),
        //     kWh: kWh.toFixed(0),
        //     cost: cost.toFixed(0)
        // });

        // report.result = new Result({
        //     headLost: new Value({ power: kWh, money: cost }),
        //     savingPotential: new Value({ power: 0, money: 0 })
        // });
        //return report;
    }
}


export class Calculator {
    constructor(private report: ReportBase) { }

    public hr: number = 1;
    public hcv: number = 1;
    public hse: number = 1;
    public q: number = 1;
    public Qkwh: number = 1;
    public Qε: number = 1;
    /*Report and Project propesties*/
    public δ: number = 0.00000005670367;
    public θse = this.report.fields.surface_temp;
    public θa = this.report.fields.ambient_temp;
    public Ot = this.report.fields.operational_time;
    public ε = this.report.fields.surface_material;
    public Σ = this.report.project.price;
    public S = this.report.fields.surface;

    private fnc: Function[] = [
        /*00*/() => undefined,
        /*01*/() => this.hr = this.ε * this.δ * ((Math.pow(this.θse + 273, 4) + Math.pow(this.θa + 273, 4)) / (Math.pow(this.θse + 273, 4) - Math.pow(this.θa + 273, 4))),
        /*02*/() => this.hcv = 1.74 * Math.exp(Math.log(Math.abs(this.θse - this.θa)) / 3),
        /*03*/() => this.hse = this.hr + this.hcv,
        /*04*/() => this.q = this.hse * Math.abs(this.θse - this.θa),
        /*05*/() => this.Qkwh = this.q * this.S * this.Ot * 1 / 1000,
        /*06*/() => this.Qε = this.Qkwh * this.Σ
    ]

    public execute() {
        this.fnc.forEach(f => f.apply(this));
        console.log(this.Qε);
    }

}