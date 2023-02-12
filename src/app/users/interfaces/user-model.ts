export interface User {
  id?: number;
  name: string;
  email: string;
  password?: string;
}

export interface UserForList {
  id: number;
  name: string;
  email: string;
}
