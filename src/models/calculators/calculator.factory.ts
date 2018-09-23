import { ReportBase } from "../report-base";
import { SurfaceDecorator, FlangeDecorator, PipeDecorator, ValveDecorator, ISurfaceDecorator, IPipeDecorator } from ".";
import { REPORT } from "../../const";

export class CalculatorFactory {
    public decorators = new Map<string, Function>();

    public calculate(report: ReportBase): ReportBase {
        return this.decorators.get(report.path)().calculate(report);
    }

    constructor(){
        this.decorators.set(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.SURFACE, ()=> new SurfaceDecorator());
        this.decorators.set(REPORT.INSULATION.INSULATED_EQUIPMENTS.SURFACE, ()=> new ISurfaceDecorator());
        this.decorators.set(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.FLANGE, ()=> new FlangeDecorator());
        this.decorators.set(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.PIPE, ()=> new IPipeDecorator());
        this.decorators.set(REPORT.INSULATION.UNINSULATED_EQUIPMENTS.VALVE, ()=> new ValveDecorator());
    }
}

export interface ICalculator {
    calculate(report: ReportBase): ReportBase;
}