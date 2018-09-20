import { ReportBase, Project } from "../models";
import { ReportSurface, ReportFlange } from "../models/reports";
import { TbiComponent } from "../models/component";
import { ReportGeneric } from "../models/reports/report-generic.class";
import { ReportPipe } from "../models/reports/report-pipe.class";

export namespace Report {
  export class Factory {
    public static base_path =  'Insulation\\Un-Insulated Equipments\\';
    public static Generic(project?: Project, component?: TbiComponent, item?: ReportBase): ReportBase {
      return new ReportGeneric(project, component || new TbiComponent(project), item);
    }
  }
  export namespace Insulation {
    export namespace InunsulatedEquipment {
      export class Factory {
        public static Surface(project?: Project, component?: TbiComponent, item?: ReportBase): ReportBase {
          return new ReportSurface(project, component || new TbiComponent(project), item);
        }
        public static Flange(project?: Project, component?: TbiComponent, item?: ReportBase): ReportBase {
          return new ReportFlange(project, component || new TbiComponent(project), item);
        }
        public static Pipe(project?: Project, component?: TbiComponent, item?: ReportBase): ReportBase {
          return new ReportPipe(project, component || new TbiComponent(project), item);
        }
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
