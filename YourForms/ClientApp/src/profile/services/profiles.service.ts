import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../models/Profile';
import { ProfilesBackendService } from '../../services/profiles-backend';


@Injectable()
export class ProfilesService {
  constructor(private profilesBackendService: ProfilesBackendService) { }

  addProfile(newProfile: Profile): Observable<number> {
    return this.profilesBackendService.addProfile(newProfile);
  }

  getProfile(profileId: number): Observable<Profile> {
    return this.profilesBackendService.getProfile(profileId);
  }

  getProfiles(): Observable<Profile[]> {
    return this.profilesBackendService.getProfiles();
  }

  updateProfile(updatedProfile: Profile): Observable<number> {
    return this.profilesBackendService.updateProfile(updatedProfile);
  }

  deleteProfile(profileId: number): Observable<number> {
    return this.profilesBackendService.deleteProfile(profileId);
  }


}


