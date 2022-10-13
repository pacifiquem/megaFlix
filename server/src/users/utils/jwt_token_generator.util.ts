import * as jwt from 'jsonwebtoken';

type Data = {
  email: string;
  username: string;
};

const jwtTokenGenerator = (data: Data): string => {
  const token = jwt.sign(
    {
      email: data.email,
      username: data.username,
    },
    `${process.env.JWT_PRIVATE_KEY}`,
    { expiresIn: `${process.env.JWT_EXPIRES_IN}` },
  );

  return token;
};

const jwtValidator = (token: string): string | jwt.JwtPayload => {
  const decoded = jwt.verify(token, `${process.env.JWT_PRIVATE_KEY}`);
  return decoded;
};

const jwtFunctions = {
  jwtTokenGenerator,
  jwtValidator,
};

export default jwtFunctions;
