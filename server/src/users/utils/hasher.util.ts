import * as bcrypt from 'bcrypt';

const hasher = async (string: string | number): Promise<string | number> => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedString = await bcrypt.hash(`${string}`, salt);

  return hashedString;
};

const comparer = async (
  string: string | number,
  hashedString: string | number,
): Promise<boolean> => {
  return await bcrypt.compare(`${string}`, `${hashedString}`);
};

const hash = {
  hasher,
  comparer,
};

export default hash;
