import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ProviderService {

  constructor(private http: HttpClient) { }

  public getAgencies = () =>
    this.http
      .get(environment.url + '/assets/data/agencies.json')
      .pipe(map((res: any) => res.agencies))

  public getTypes = () =>
    this.http
      .get(environment.url + '/assets/data/missiontypes.json')
      .pipe(map((res: any) => res.types))

  public getStatuses = () =>
    this.http
      .get(environment.url + '/assets/data/launchstatus.json')
      .pipe(map((res: any) => res.types))

  public getMissions = () =>
    this.http
      .get(environment.url + '/assets/data/launches.json')
      .pipe(map((res: any) => res.launches))
}
