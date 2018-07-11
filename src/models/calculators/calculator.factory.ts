import { ReportBase } from "../report-base";
import { SurfaceDecorator } from ".";

export class CalculatorFactory {
    public decorators = new Map<string, Function>();

    public calculate(report: ReportBase): ReportBase {
        return this.decorators.get(report.path)().calculate(report);
    }

    constructor(){
        this.decorators.set(`Insulation\\Un-Insulated Equipments\\Surface`, ()=> new SurfaceDecorator())
    }
}

export interface ICalculator {
    calculate(report: ReportBase): ReportBase;
}

export const Calc = {
    BOLTZMANN: 5.670367e-8,
    HR_FIXED: 273,
    HR_POW: 4,
    HCV_FIXED: 1.74,
    HCV_POW: 0.3333333,
    KWH: 1000
};