import { ICalculator, Calc } from "./calculator.factory";
import { ReportBase, Result, Value } from "../report-base";

export class SurfaceDecorator implements ICalculator {

    public calculate(report: ReportBase): ReportBase {
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
