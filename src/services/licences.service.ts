import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, ResponseOptions } from "@angular/http";
import { Project } from "../models";

@Injectable()
export class LicencesService {
  public static CODE: string = "9979";
  public lock: boolean = false;
  private _projects: Project[] = [];

  async validate(code: string): Promise<{ ok: boolean; message: string }> {
    let result = await this.getRemoteCode(code);
    return new Promise<{ ok: boolean; message: string }>(resolve => {
      if (result.error_code == 0) {
        resolve({ ok: true, message: "Validation code is valid." });
        this.type = "PRO";
      } else {
        this.type = "BASIC";
        resolve({ ok: false, message: result.message });
      }
    });
  }

  public get type(): string {
    return localStorage.getItem("tbi-licence") || "BASIC";
  }
  public set type(type: string) {
    localStorage.setItem("tbi-licence", type);
  }

  public set projects(projects: Project[]) {
    this.lock =
      this.type == "BASIC" &&
      this.projects.reduce((a, p) => a.concat(p.components), []).length >= 1;
    this._projects = projects;
  }

  public get projects(): Project[] {
    return this._projects;
  }

  public async getRemoteCode(code: string): Promise<any> {
    var headers = new Headers();
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded' );
    const options = new ResponseOptions({ headers: headers });
    
    let body = new URLSearchParams();
    body.set('code', code);
    body.set('license_type', '1');
    return new Promise<any>(resolve => {
      this.http
        .post("https://www.eiif.testengineonline.com/tbi-app/validate-code", body.toString(), options)
        .toPromise()
        .then((r: any) => {
          //debugger
          resolve(JSON.parse(r._body).response_data)
        });
    });
  }

  requestProKey() {
    window.open('https://www.eiif.org/tbi/get-tbi-app', '_system')
  }

  constructor(private http: Http) { }
}
