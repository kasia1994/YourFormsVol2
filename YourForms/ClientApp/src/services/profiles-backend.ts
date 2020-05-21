import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable()
export abstract class ProfilesBackendService {

  abstract addProfile(newProfile: Profile): Observable<number>;
  abstract getProfile(id: number): Observable<Profile>;
  abstract getProfiles(): Observable<Profile[]>;
  abstract updateProfile(updatedProfile: Profile): Observable<number>;
  abstract deleteProfile(profileId: number): Observable<number>;
}
