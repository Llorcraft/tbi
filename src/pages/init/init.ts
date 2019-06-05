import {
  Component,
  ChangeDetectorRef,
  AfterViewInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { NavController, Keyboard } from "ionic-angular";
import { ProjectsPage } from "../projects/projects";
import { LicencesService, MessageService } from "../../services";
import { ScrollToComponent } from "../scroll_to_component.class";
import { ContactPage } from "../contact/contact";

@Component({
  selector: "page-init",
  templateUrl: "init.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InitPage extends ScrollToComponent implements AfterViewInit {
  public user_name: string = "";
  public isPro = 0;
  public code = "";
  accept: boolean = !0;
  public proCodePattern = `^(${LicencesService.CODE})`;

  constructor(
    public appCtrl: NavController,
    public license: LicencesService,
    private cd: ChangeDetectorRef,
    private messages: MessageService,
    protected keyboard: Keyboard
  ) {
    super(keyboard);
    this.offset = 0;
    this.isPro = license.type == "PRO" ? 1 : 0;
    this.code = this.isPro ? LicencesService.CODE : "";

    this.user_name = "Luis R.";
    this.start("PRO");
  }

  disclaimer() {
    this.appCtrl.push(ContactPage);
  }

  public onVersionSelected(e, form) {
    return;
    //if (e == 0) this.save(form);
  }

  public onCodeChange(e, form) {
    return;
    //if ((e.value || "").toLowerCase() == LicencesService.CODE) this.save(form);
  }


  public async save(form) {
    if (this.user_name.toLocaleLowerCase() == "reset") {
      this.license.type = this.code = '';
      this.isPro = 0;
      return;
    }
    form.submitted = true;
    if (form.invalid) return;
    localStorage.setItem("tbi-user", this.user_name);
    //this.license.type = "BASIC";
    if (this.license.type != 'PRO')
      this.start("PRO");
    else if (this.isPro == 1 && this.license) {
      const validation = await this.license.validate(this.code)
      if (validation.ok || this.code == LicencesService.CODE)
        this.start("PRO");
      else
        this.messages.alert('Error', validation.message)
    } else {
      this.start("BASIC");
    }
    //this.appCtrl.setRoot(ProjectsPage, { user_name: this.user_name, summary: true, project: '6243045674937677'});
  }

  start(type: string) {
    this.license.type = type;
    this.appCtrl.setRoot(ProjectsPage, { user_name: this.user_name });
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}
