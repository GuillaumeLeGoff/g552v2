export type User = {
  id: number;
  username: string;
  password: string;
  role: string;
  first_login: boolean;
  active_token: string | null;
};
