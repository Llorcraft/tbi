import { Value } from "./value";

export class Result {
    public headLost: Value = new Value();
    public savingPotentialMin: Value = new Value();
    public savingPotentialMax: Value = new Value();
    public advise: string = '';
  
    constructor(result?: Partial<Result>) {
      if (!result) return;
      Object.assign(this, result);
      this.advise = result.advise;
      this.headLost = new Value(result.headLost);
      this.savingPotentialMin = new Value(result.savingPotentialMin);
      this.savingPotentialMax = new Value(result.savingPotentialMax);
    }
  }