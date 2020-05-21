export class Profile {
  constructor();
  constructor(
    public profileId?: number,
    public name?: string,
    public surname?: string,
    public birthDate?: string,
    public creationDate?: string,
    public lastUpdate?: string,
    public gender?: boolean,
    public nationality?: number,
    public phone?: string,
    public emailAdress?: string,
    public rating?: number,
    public isActive?: boolean
  ) {}
}
