import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, ResponseOptions } from "@angular/http";
import { Project } from "../models";
import { IMAGES } from "../const/images";
import * as moment from 'moment';

@Injectable()
export class LicencesService {

  public static CODE: string = "fRVnq2a230";
  public lock: boolean = false;
  private _projects: Project[] = [];

  async validate(code: string): Promise<{ ok: boolean; message: string }> {
    let result = await this.getRemoteCode(code);
    return new Promise<{ ok: boolean; message: string }>(resolve => {
      if (result.error_code == 0) {
        resolve({ ok: true, message: "Validation code is valid." });
      } else {
        resolve({ ok: false, message: result.message });
      }
    });
  }

  setLogo() {
    return null;
    // if(!!this.getData()){
    //   setTimeout(()=>document.getElementsByClassName('toolbar-background')[0]['style'].backgroundImage = `url(${this.getData().url_logo})`, 500);
    // }
  }

  public get type(): string {
    const type = !this.getData() || !!this.getData().easy || this.remaining() < 0 ? 'EASY' : 'PRO';
    return type;
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

  reset() {
    localStorage.removeItem('tbi-licence-data');
  }
  getData(): any {
    let data = localStorage.getItem('tbi-licence-data');
    return !data
      ? {
        name: 'TIPCHECK department EiiF',
        mail: 'http://www.eiif.org',
        url: 'TIPCHECK@eiif.org',
        url_logo: IMAGES.LOGO,
        phone_number: '',
        easy: true,
        first_activation_data: moment(new Date()).add('years', -1)
      }
      : JSON.parse(data);
  }

  public remaining(): number {
    return moment(moment(this.getData().first_activation_data)).add('years', 1).diff(new Date(), 'days');
  }
  public async getRemoteCode(code: string): Promise<any> {
    var headers = new Headers();
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const options = new ResponseOptions({ headers: headers });

    let body = new URLSearchParams();
    body.set('code', code);
    body.set('license_type', '1');
    return new Promise<any>(resolve => {
      this.http
        .post("https://www.eiif.testengineonline.com/tbi-app/validate-code", body.toString(), options)
        .toPromise()
        .then((r: any) => {
          let data = JSON.parse(r._body).response_data
          localStorage.setItem('tbi-licence-data', JSON.stringify(data.data));
          resolve(data)
        });
    });
  }

  requestProKey() {
    window.open('https://www.eiif.org/tbi/get-tbi-app', '_system')
  }

  constructor(private http: Http) { }
}
