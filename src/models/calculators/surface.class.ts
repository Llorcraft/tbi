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
  public hcv_laminar: number = 1;
  public hse: number = 1;
  public q: number = 1;
  public q_min: number = 1;
  public q_max: number = 1;
  public qref_pb: number = 1;
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
  public qmin: number = 1;
  public qmax: number = 1;
  public a: number = 0.0338;
  public b: number = 0.0001173;
  public c: number = 0.00000007545;
  public d: number = 0.0000000007109;
  public Ft: number = 1.5;
  public Δθ: number = 1;
  public emin: number = 1;
  public emax: number = 1;
  public hse_min: number = 1
  public hse_max: number = 1
  public Rse_min: number = 1;
  public Rse_max: number = 1;
  public Rins_min: number = 1;
  public Rins_max: number = 1;
  public lort : number = 1;
  public De : number = 1;
  public ql : number = 1;
  public ql_min : number = 1;
  public ql_max : number = 1;
  public Rle_min : number = 1;
  public Rle_max : number = 1;
  public Insulation_advice : string = '';
  /*Report and Project propesties*/
  public δ: number = 0.00000005670367;
  public θse = this.report.fields.surface_temp;
  public θa = this.report.fields.ambient_temp;
  public Ot = this.report.fields.operational_time;
  public ε = this.report.fields.surface_material;
  public Σ = this.report.project.price;
  public S = this.report.fields.surface;
  public l = this.report.fields.longitud;
  public n = this.report.fields.number;

  private fnc: Function[] = [
        /*00*/() => undefined,
        /*01*/() => this.hr = this.ε * this.δ * ((Math.pow(this.θse + 273, 4) + Math.pow(this.θa + 273, 4)) / (Math.pow(this.θse + 273, 4) - Math.pow(this.θa + 273, 4))),
        /*02*/() => this.hcv = 1.74 * Math.exp(Math.log(Math.abs(this.θse - this.θa)) / 3),
        /*03*/() => this.hse = this.hr + this.hcv,
        /*04*/() => this.q = this.hse * Math.abs(this.θse - this.θa),
        /*05*/() => this.Qkwh = this.q * this.S * this.Ot * 1 / 1000,
        /*06*/() => this.Qε = this.Qkwh * this.Σ,
        /*07*/() => this.θm_min = (this.θse + (this.θa + 35)) / 2,
        /*08*/() => this.θm_max = (this.θse + (this.θa + 20)) / 2,
        /*09*/() => this.λm_min = this.a + this.b * this.θm_min + this.c * Math.pow(this.θm_min, 2) + this.d * Math.pow(this.θm_min, 3),
        /*10*/() => this.λm_max = this.a + this.b * this.θm_max + this.c * Math.pow(this.θm_max, 2) + this.d * Math.pow(this.θm_max, 3),
        /*11*/() => this.λdes_min = this.λm_min * this.Ft,
        /*12*/() => this.λdes_max = this.λm_max * this.Ft,
        ///*13*/() => this.Δθ = Math.abs(this.θse - this.θa),
        ///*14*/() => this.lmin = 1,
        /*15*/() => this.Rse_min = 1 / this.hse_min,
        /*16*/() => this.Rse_max = 1 / this.hse_max,
        /*17*/() => this.Rins_min = this.emin / this.λdes_min,
        /*18*/() => this.Rins_max = this.emax / this.λdes_max,
        /*19*/() => this.qref_pb = this.q * (10000 * this.c)  / this.Ot * this.ε,
        /*20*/()=> this.q_min = Math.abs(this.θse - this.θa)/(this.Rse_min + this.Rins_min),
        /*21*/()=> this.q_max = Math.abs(this.θse - this.θa)/(this.Rse_max + this.Rins_max),
        /*22*/() => this.Qkwh_min = this.qmin * this.S * this.Ot * 1 / 1000,
        /*23*/() => this.Qkwh_max = this.qmax * this.S * this.Ot * 1 / 1000,
        /*24*/() => this.Qε_min = this.Qkwh_min * this.ε,
        /*25*/() => this.Qε_max = this.Qkwh_max * this.ε,
        /*26*/() => this.Savingkwh_min = this.Qkwh - this.Qkwh_min,
        /*27*/() => this.Savingkwh_max = this.Qkwh - this.Qkwh_max,
        /*28*/() => this.Savingε_min = this.Qε - this.Qε_min,
        /*29*/() => this.Savingε_max = this.Qε - this.Qε_max,
        /*30*/() => this.Insulation_advice = this.qref_pb > this.qmin?'Insulation recommended':'System OK',
        /*32*/() => this.lort = Math.pow(this.De,3)*Math.abs(this.θse-this.θa),
        /*33*/() => this.hcv_laminar = 1.25 * Math.pow(Math.abs(this.θse-this.θa)/this.De,1/4),


        /*44*/() => this.Qkwh = this.ql*this.l*this.Ot*1/1000,
        /*45*/() => this.ql_min = Math.abs(this.θse-this.θa)/(this.Rle_min +this.Rins_min),
        /*46*/() => this.ql_max = Math.abs(this.θse-this.θa)/(this.Rle_max +this.Rins_max),
        /*47*/() => this.Qkwh = this.ql*this.l*this.Ot*this.n*1/1000,
        /*48*/() => this.ql_ref_pb = this.ql - (10000* this.c *this.Sp)

      ];

  public execute() {
    this.fnc.forEach(f => f.apply(this));
    console.log(this.Qε);
  }

}
