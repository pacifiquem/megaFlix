export interface newUserDTO {
  readonly username: string;
  readonly email: string;
  readonly password: string | number;
  Country: string;
}

export interface loginDTO {
  readonly email: string;
  readonly password: string;
}
