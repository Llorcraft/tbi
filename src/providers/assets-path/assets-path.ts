import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AssetsPathProvider {

  public broadcastedProviderPath: any;

  constructor(http: HttpClient) {
    let broadcastedProviderPath = "/src/assets"
  }

}
