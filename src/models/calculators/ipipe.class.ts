import { ICalculator } from "./calculator.factory";
import { ReportBase } from "../report-base";
import { BaseCalculator } from "./base-calculator.class";

export class IPipeDecorator implements ICalculator {
  public calculate(report: ReportBase): ReportBase {
    return new IPipeCalculator(report).execute();
  }
}

class IPipeCalculator extends BaseCalculator {
  constructor(report: ReportBase) {
    super(report, [
        // /*02*/() => this.hcv = 1.74 * Math.pow(this.Δθ, 1 / 3),
        // /*04*/() => this.q = this.hse * this.Δθ,
        () => { this.θse_min = 55; this.θse_max = 35; this.θa_min = 35; this.θa_max = 1; },
        /**00*/() => this.Δθ = Math.abs(this.θse - this.θa),
        /*01*/() => this.hr = this.ε * this.δ * (Math.pow(this.θse + 273, 4) - Math.pow(this.θa + 273, 4)) / ((this.θse + 273) - (this.θa + 273)),
        /*01min*/() => this.hr_min = this.ε_default * this.δ * (Math.pow(this.θse_min + 273, 4) - Math.pow(this.θa_min + 273, 4)) / ((this.θse_min + 273) - (this.θa_min + 273)),
        /**07*/() => this.θm_min = (this.θse + this.θa + 35) / 2,
        /**08*/() => this.θm_max = (this.θse + this.θa + 20) / 2,
        /**09*/() => this.λm_min = this.a + this.b * this.θm_min + this.c * Math.pow(this.θm_min, 2) + this.d * Math.pow(this.θm_min, 3),
        /**10*/() => this.λm_max = this.a + this.b * this.θm_max + this.c * Math.pow(this.θm_max, 2) + this.d * Math.pow(this.θm_max, 3),
        /**11*/() => this.λdes_min = this.λm_min * this.Ft,
        /**12*/() => this.λdes_max = this.λm_max * this.Ft,
        /**13*/() => this.e_min = this.get_l(0),
        /**14*/() => this.e_max = this.get_l(1),
        /*36*/() => this.De_min = this.De,
        /*37*/() => this.De_max = this.De,

        /*32*/() => this.lort = Math.pow(this.De, 3) * this.Δθ,
        /*32min*/() => this.lort_min = Math.pow(this.De, 3) * Math.abs(this.θse_min - this.θa_min),

        /*33*/() => this.hcv_laminar = 1.25 * Math.pow(this.Δθ / this.De, 0.25),
        /*33min*/() => this.hcv_laminar_min = 1.25 * Math.pow(Math.abs(this.θse_min - this.θa_min) / this.De_min, 0.25),
        ///**33min*/() => this.hcv_laminar_max = 1.25 * Math.pow(Math.abs(this.θse_max - this.θa_max) / this.De_max, 0.25),
        /**34*/() => this.hcv_turbulent = 1.21 * Math.pow(this.Δθ, 0.33),
        /**34min*/() => this.hcv_turbulent_min = 1.21 * Math.pow(Math.abs(this.θse_min - this.θa_min), 0.33),
        /**35*/() => this.hse = this.hr + (this.lort < 10 ? this.hcv_laminar : this.hcv_turbulent),
        /**35min*/() => this.hse_min = this.hr_min + (this.lort < 10 ? this.hcv_laminar_min : this.hcv_turbulent),
        /**35max*/() => this.hse_max = this.hr + (this.lort < 10 ? this.hcv_laminar_max : this.hcv_turbulent),
        /**42*/() => this.Rle = 1 / (this.hse * Math.PI * this.De),
        /**42min*/() => this.Rle_min = 1 / (this.hse_min * Math.PI * this.De_min),
        /**42max*/() => this.Rle_max = 1 / (this.hse_max * Math.PI * this.De_max),
        ///*41*/() => this.qref_pb = this.q - ((10000 * this.Cpb_surface_pipe) / this.Ot / this.Σ),
        /**43*/() => this.ql = this.Δθ / this.Rle,
        /**38*/() => this.Rins_min = (Math.log(this.De_min / this.De)) / (2 * Math.PI * this.λdes_min),
        /**39*/() => this.Rins_max = (Math.log(this.De_max / this.De)) / (2 * Math.PI * this.λdes_max),
        /**45*/() => this.ql_min = (Math.abs(this.θse_min - this.θa_min)) / (this.Rle_min + this.Rins_min),
        /**46*/() => this.ql_max = 114,
        //*47*/() => this.Qkwh = this.ql * this.l * this.Ot * this.l * 1 / 1000,
        /**40*/() => this.Sp = Math.PI * this.De_min,
        /**44*/() => this.Qkwh =  this.ql * this.l * this.Ot * 1 / 1000,
        /**44min*/() => this.Qkwh_min =  this.ql_min * this.l * this.Ot * 1 / 1000,
        /**44max*/() => this.Qkwh_max =  this.ql_max * this.l * this.Ot * 1 / 1000,
        /*48*/() => this.ql_ref_pb = this.ql - ((10000 * this.Cpb_surface_pipe * this.Sp) / (this.Ot * this.Σ)),
        /*06*/() => this.Qε = this.Qkwh * this.Σ,
        /*24*/() => this.Qε_min = this.Qkwh_min * this.Σ,
        /*25*/() => this.Qε_max = this.Qkwh_max * this.Σ,
        /*26*/() => this.Savingkwh_min = this.Qkwh - this.Qkwh_min,
        /*27*/() => this.Savingkwh_max = this.Qkwh - this.Qkwh_max,
        /*28*/() => this.Savingε_min = this.Qε - this.Qε_min,
        /*29*/() => this.Savingε_max = this.Qε - this.Qε_max,
        /*30*/() => this.Insulation_advice = this.ql_ref_pb > this.ql_min ? 'Insulation recommended' : 'System OK',
    ]);

  }

}


