import { BaseCalculator } from "./base-calculator.class";
import { ReportBase } from "../report-base";

export class Thickness extends BaseCalculator {
    constructor(protected report: ReportBase, protected fnc: Function[]) { 
        super(report, fnc);
    }

    protected get_l(index: number) {
        if (this.Δθ <= 80) return [20, 100][index] / 1000;
        if (this.Δθ <= 150) return [30, 180][index] / 1000;
        if (this.Δθ <= 250) return [50, 250][index] / 1000;
        return [80, 300][index] / 1000;
    }
}