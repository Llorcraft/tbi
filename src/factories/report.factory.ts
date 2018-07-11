import { ReportBase, Project } from "../models";
import { ReportSurface } from "../models/reports";

export namespace Report {
  export namespace Insulation {
    export namespace InunsulatedEquipment {
      export class Factory {
        public static base_path =  'Insulation\\Un-Insulated Equipments\\';
        public static Surface(project?: Project, item?: ReportBase): ReportBase {
          return new ReportSurface(project, item);
        }
        // public static Pipe(): ReportBase {
        //   return new ReportBase({
        //     name: `Pipes`,
        //     path: `${this.base_path}Pipes`
        //   });
        // }
        // public static Flange(): ReportBase {
        //   return new ReportBase({
        //     name: 'Flange',
        //     path: `${this.base_path}Flanges`
        //   });
        // }
        // public static Valve(): ReportBase {
        //   return new ReportBase({
        //     name: 'Valve',
        //     path: `${this.base_path}Valves`
        //   });
        // }
        // public static Other(): ReportBase {
        //   return new ReportBase({
        //     name: 'Other',
        //     path: `${this.base_path}Others`
        //   });
        //}
      }
    }
  }
}
