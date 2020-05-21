import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfilesService } from './services/profiles.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs';

@Component({
  templateUrl: './profile-details.component.html'
})

export class ProfileDetailsComponent implements OnInit {
  constructor(
    private profileService: ProfilesService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { };

  pageTitle: string;
  urlParam: number;
  isInEditMode: boolean = true;
  profile: Profile = new Profile();

  ngOnInit(): void {
    this.detectUrlParam();

    if (this.location.isCurrentPathEqualTo("/profile/new-profile" )) {
      this.pageTitle = "Nowy użytkownik";
    }
    else if (this.location.isCurrentPathEqualTo("/profile/profile-update/" + this.urlParam)) {
      this.pageTitle = "Aktualizacja danych użytkownika";
      this.downloadProfile();
    }
    else {
      this.pageTitle = "Szczegóły";
      this.downloadProfile();
      this.isInEditMode = false;
    }
  }

  downloadProfile(): void {
    this.profileService.getProfile(this.urlParam).subscribe(
      profileFromDB => { this.profile = profileFromDB },
      errorObj => { console.log(errorObj) });
    }

  onSubmit(profObj: Profile): void {
    if (this.location.isCurrentPathEqualTo("/profile/new-profile")) {
      this.profileService.addProfile(profObj).subscribe(
        onSuccess => console.log(onSuccess),
      onError=> console.log(onError))
    }
    else {
      this.profileService.updateProfile(profObj).subscribe(
        onSuccess => console.log(onSuccess),
        onError => console.log(onError))
}
  }

  detectUrlParam(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.urlParam = params['id'];
    })
  }

  goBack(): void {
    this.location.back();
  }
}
