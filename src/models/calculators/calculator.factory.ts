import { ReportBase } from "../report-base";
import { SurfaceDecorator, FlangeDecorator, PipeDecorator } from ".";

export class CalculatorFactory {
    public decorators = new Map<string, Function>();

    public calculate(report: ReportBase): ReportBase {
        return this.decorators.get(report.path)().calculate(report);
    }

    constructor(){
        this.decorators.set(`Insulation\\Un-Insulated Equipments\\Surface`, ()=> new SurfaceDecorator());
        this.decorators.set(`Insulation\\Un-Insulated Equipments\\Flange`, ()=> new FlangeDecorator());
        this.decorators.set(`Insulation\\Un-Insulated Equipments\\Pipe`, ()=> new PipeDecorator())
    }
}

export interface ICalculator {
    calculate(report: ReportBase): ReportBase;
}