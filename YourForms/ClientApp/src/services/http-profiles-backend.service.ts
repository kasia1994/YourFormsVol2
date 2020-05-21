import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { ProfilesBackendService } from '../services/profiles-backend';
import { HttpClient, HttpRequest, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpProfilesBackendService extends ProfilesBackendService {
 
  private addProfileUrl: string = "api/profile/addprofile";
  private getProfileUrl: string = "api/profile/getprofile?profileId=";
  private getProfilesUrl: string = "api/profile/getProfiles";
  private updateProfileUrl: string = "api/profile/updateProfile";
  private deleteProfileUrl: string = "api/profile/deleteprofile?profileId=";

  constructor(private http: HttpClient) {
    super();

  }

  addProfile(newProfile: Profile): Observable<number> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<number>(this.addProfileUrl, JSON.stringify(newProfile), { headers });
  }
  getProfile(id: number): Observable<Profile> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Profile>(this.getProfileUrl + id, { headers });
  }
  getProfiles(): Observable<Profile[]> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Profile[]>(this.getProfilesUrl, { headers });
  }
  updateProfile(updatedProfile: Profile): Observable<number> {
    return this.http.post<number>(this.updateProfileUrl, JSON.stringify(updatedProfile));
  }
  deleteProfile(profileId: number): Observable<number> {
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<number>(this.deleteProfileUrl+profileId, { headers });
  }
}
