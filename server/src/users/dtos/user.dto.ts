export interface newUserDTO {
  readonly username: string;
  readonly email: string;
  password: string | number;
}

export interface loginDTO {
  readonly email: string;
  readonly password: string;
}
