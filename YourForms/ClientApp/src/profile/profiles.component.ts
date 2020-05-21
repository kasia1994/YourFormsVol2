import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfilesService } from '../profile/services/profiles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html'
})

export class ProfilesComponent implements OnInit {
  constructor(private profilesService: ProfilesService,
    private router: Router
  ) { };

  profiles: Array<Profile> = new Array<Profile>();
  pageTitle: string = "Uczniowie";
  tempInfo: string = "Loading...";

  ngOnInit(): void {
    this.downloadProfiles();
  }

  downloadProfiles(): void {
    this.profilesService.getProfiles().subscribe(
      profilesFromDB => {
        if (profilesFromDB.length == 0) {
          this.tempInfo = "No records found."
        }
        else {
          this.profiles = profilesFromDB
        }
      },
      error => { console.log("Error: ", error) }
    );
  }

  getProfile(id: number): void {
    this.router.navigate(['./profile/profile-details', id]);
  }

  updateProfile(id: number): void {
    this.router.navigate(['./profile/profile-update', id]);
  }

  deleteProfile(id: number): void {
    this.profilesService.deleteProfile(id).subscribe(
      onSuccess => {
        console.log(onSuccess);
        this.profiles.splice(id, 1);
      },
      onError => console.log(onError)
    );
  }

}
