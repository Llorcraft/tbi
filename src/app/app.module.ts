import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { TooltipsModule } from 'ionic-tooltips';


/*Pages*/
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ProjectReportsPage } from '../pages/home/home';
import { ProjectsPage } from '../pages/projects/projects';
import { EditProjectPage } from '../pages/projects/edit';
import { ProjectPage } from '../pages/projects/project';
import { SummaryPage } from '../pages/summary/summary';
import { SummaryEditPage } from '../pages/summary/summary-edit';

/*Plugins*/
import { Camera } from '@ionic-native/camera';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileOpener } from '@ionic-native/file-opener';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*Services*/
import { ProjectService } from '../services';
import { ReportService } from '../services/report.service';
import { ComponentService } from '../services/component.service';
import { CameraService } from '../services/camera';

// import { ReportSafetSurfacePage } from '../pages/reports/safety/surface';

import { InitPage } from '../pages/init/init';
import { PicturesPage } from '../pages/pictures/pictures';

/*Components*/
import { SvgInsulationComponent } from '../components/svg/svg-insulation.component';
import { SvgCustomComponent } from '../components/svg/svg-custom.component';
import { SvgSafetyComponent } from '../components/svg/svg-safety.component';
import { SvgMaintenanceComponent } from '../components/svg/svg-maintenance.component';
import { SvgFlangeComponent } from '../components/svg/svg-flange.component';
import { SvgHotSurfaceComponent } from '../components/svg/svg-hot-surface.component';
import { SvgFireProtectionComponent } from '../components/svg/svg-fire-protection.component';
import { SvgTrafficComponent } from '../components/svg/svg-traffic.component';
import { SvgDamageInsulationComponent } from '../components/svg/svg-damage-insulation.component';
import { SvgDamageCladdingComponent } from '../components/svg/svg-damage-cladding.component';
import { SvgIceWetComponent } from '../components/svg/svg-ice-wet.component';
import { SvgMechanicalComponent } from '../components/svg/svg-mechanical.component';
import { SvgElectricalComponent } from '../components/svg/svg-electrical.component';
import { SvgLeakageComponent } from '../components/svg/svg-leakage.component';
import { SvgOtherSafetyComponent } from '../components/svg/svg-other-safety.component';
import { SvgColdComponent } from '../components/svg/svg-cold.component';
import { SvgPipeInsultationComponent } from '../components/svg/svg-pipe-insulation.component';
import { SvgPipeComponent } from '../components/svg/svg-pipe.component';
import { SvgValveComponent } from '../components/svg/svg-valve.component';
import { SvgSurfaceComponent } from '../components/svg/svg-surface.component';
import { SvgDamagedCladdingComponent } from '../components/svg/svg-damaged-cladding.component';
import { SvgDamagedInsulationComponent } from '../components/svg/svg-damaged-insulation.component';
import { SvgEnergyComponent } from '../components/svg/svg-energy.component';
import { SvgInsulatedSurfaceComponent } from '../components/svg/svg-insulated-surface.component';
import { SvgOthersComponent } from '../components/svg/svg-others.component';
import { SvgInsulatedOthersComponent } from '../components/svg/svg-insulated-others.component';
import { SvgCilinderAreaComponent } from '../components/svg/svg-cilinder-area.component';
import { SvgCubeAreaComponent } from '../components/svg/svg-cube-area.component';
import { SvgCircleAreaComponent } from '../components/svg/svg-circle-area.component';
import { SvgHousekeepingComponent } from '../components/svg/svg-housekeeping.component';
import { SvgStructuralComponent } from '../components/svg/svg-structural.component';
//Reports

import {
  GenericReportPage,
  ReportHeaderComponent,
  ReportFooterComponent,
  ReportsPage,
  ReportSurfacePage,
  ReportAreaButtonComponent,
  ReportAreaModalComponent,
  ReportMoreButtonComponent,
  ReportErrorsComponent,
  ReportMediumTempButtonsComponent,
  ReportTempMarkersWindowComponent,
  ReportResultComponent,
  ReportPictureSlideComponent,
  ReportEditPictureComponent,
  ReportFlangePage,
  ReportPipePage,
  ReportValvePage,
  ReportInsulatedSurfacePage,
  ReportInsulatedPipePage
} from '../pages/reports'

//Pipes
import { SurfaceMaterialPipe } from '../pipes/surface-material.pipe';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    ProjectReportsPage,
    ProjectsPage,
    EditProjectPage,
    ProjectPage,
    GenericReportPage,
    ReportsPage,
    InitPage,
    PicturesPage,
    SummaryPage,
    SummaryEditPage,
    //Pipes
    SurfaceMaterialPipe,
    //
    ReportEditPictureComponent,
    ReportPictureSlideComponent,
    ReportHeaderComponent,
    ReportFooterComponent,
    ReportAreaButtonComponent,
    ReportAreaModalComponent,
    ReportMoreButtonComponent,
    ReportMediumTempButtonsComponent,
    ReportTempMarkersWindowComponent,
    ReportErrorsComponent,
    ReportResultComponent,
    ReportSurfacePage,
    ReportInsulatedSurfacePage,
    ReportFlangePage,
    ReportPipePage,
    ReportInsulatedPipePage,
    ReportValvePage,
    //Components
    SvgInsulationComponent,
    SvgCustomComponent,
    SvgSafetyComponent,
    SvgMaintenanceComponent,
    SvgFlangeComponent,
    SvgHotSurfaceComponent,
    SvgFireProtectionComponent,
    SvgTrafficComponent,
    SvgDamageInsulationComponent,
    SvgDamageCladdingComponent,
    SvgMechanicalComponent,
    SvgElectricalComponent,
    SvgIceWetComponent,
    SvgLeakageComponent,
    SvgOtherSafetyComponent,
    SvgColdComponent,
    SvgPipeInsultationComponent,
    SvgPipeComponent,
    SvgValveComponent,
    SvgSurfaceComponent,
    SvgDamagedCladdingComponent,
    SvgDamagedInsulationComponent,
    SvgEnergyComponent,
    SvgInsulatedSurfaceComponent,
    SvgOthersComponent,
    SvgInsulatedOthersComponent,
    SvgCilinderAreaComponent,
    SvgCubeAreaComponent,
    SvgCircleAreaComponent,
    SvgHousekeepingComponent,
    SvgStructuralComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition'
    }),
    TooltipsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ProjectReportsPage,
    ProjectsPage,
    EditProjectPage,
    ProjectPage,
    GenericReportPage,
    ReportsPage,
    InitPage,
    PicturesPage,
    SummaryPage,
    SummaryEditPage,
    //Reports
    ReportAreaModalComponent,
    ReportTempMarkersWindowComponent,
    ReportSurfacePage,
    ReportInsulatedSurfacePage,
    ReportFlangePage,
    ReportPipePage,
    ReportInsulatedPipePage,
    ReportValvePage
  ],
  providers: [
    /*App services*/
    ReportService,
    ProjectService,
    ComponentService,
    CameraService,
    Camera,
    StatusBar,
    SplashScreen,
    FileChooser,
    FileOpener,
    FilePath,
    ScreenOrientation,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
