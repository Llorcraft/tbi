import { ICalculator, Calc } from "./calculator.factory";
import { ReportBase, Result, Value } from "../report-base";

export class SurfaceDecorator implements ICalculator {
    public calculate(report: ReportBase): ReportBase {
        fnc.forEach((f, i) => console.log(i, f.apply(i)));

        let Ø = 1;
        let ε
        let hr = Calc.BOLTZMANN
            * report.fields.surface_material
            * ((Math.pow((report.fields.surface_temp + Calc.HR_FIXED), Calc.HR_POW)
                - Math.pow((report.fields.ambient_temp + Calc.HR_FIXED), Calc.HR_POW)))
            / (report.fields.surface_temp - report.fields.ambient_temp);
        let hcv = Calc.HCV_FIXED
            * Math.pow(Math.abs(report.fields.surface_temp - report.fields.ambient_temp), Calc.HCV_POW);
        let hse = hr + hcv;
        let q3 = hse * Math.abs(report.fields.surface_temp - report.fields.ambient_temp);
        let kWh = q3
            * report.fields.operational_time
            * report.fields.surface
            / Calc.KWH;
        let cost = kWh * report.project.price;
        //let sq3 = Math.abs(report.fields.surface_temp - report.fields.ambient_temp) / (1 / hse + 1)

        console.table({
            hr: hr.toFixed(2),
            hcv: hcv.toFixed(2),
            hse: hse.toFixed(2),
            q3: q3.toFixed(0),
            kWh: kWh.toFixed(0),
            cost: cost.toFixed(0)
        });

        report.result = new Result({
            headLost: new Value({ power: kWh, money: cost }),
            savingPotential: new Value({ power: 0, money: 0 })
        });
        return report;
    }
}

let hr: number = 1,
    hcv: number = 1,
    hse: number = 1,
    q: number = 1,
    Qkwh: number = 1,
    Qε: number = 1,
    Σ: number = 1,
    ε: number = 1,
    δ: number = 1,
    θse: number = 1,
    θa: number = 1,
    Ot: number = 1,
    S: number = 1
const fnc: Function[] = [
    /**/() => S = 2,
    (index) => S * index,
    /*00*/() => undefined,
    /*01*/() => hr = ε * δ * ((Math.pow(θse + 273, 4) + Math.pow(θa + 273, 4)) / (Math.pow(θse + 273, 4) - Math.pow(θa + 273, 4))),
    /*02*/() => hcv = 1.74 * Math.exp(Math.log(Math.abs(θse - θa)) / 3),
    /*03*/() => hse = hr + hcv,
    /*04*/() => q = hse * Math.abs(θse - θa),
    /*05*/() => Qkwh = q * S * Ot * 1 / 1000,
    /*06*/() => Qε = Qkwh * Σ
]

export class Calculator<T extends ReportBase> {
    public execute(report: ReportBase) {
        θse = report.fields.surface;
        fnc[0].apply(this)
    }

}