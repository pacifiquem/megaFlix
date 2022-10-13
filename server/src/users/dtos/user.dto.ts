export interface newUserDTO {
  readonly username: string;
  readonly email: string;
  password: string | number;
  resetPasswordToken: string;
}

export interface loginDTO {
  readonly email: string;
  readonly password: string;
}

export interface getResetPasswordToken {
  readonly email: string;
}

export interface updatePassword {
  token: string;
  readonly password: string;
}

export interface updatePasswordParams {
  readonly token: string;
}

export interface getUserbyEmailDTO {
  readonly email: string;
}
