import { ReportBase } from "../report-base";
import { SurfaceDecorator } from ".";

export class CalculatorFactory {
    public decorators = new Map<string, Function>();

    public calculate(report: ReportBase): ReportBase {
        return this.decorators.get(report.path)().calculate(report);
    }

    constructor(){
        this.decorators.set(`Insulation\\Un-Insulated Equipments\\Surface`, ()=> new SurfaceDecorator());
        this.decorators.set(`Insulation\\Un-Insulated Equipments\\Flange`, ()=> new SurfaceDecorator())
    }
}

export interface ICalculator {
    calculate(report: ReportBase): ReportBase;
}