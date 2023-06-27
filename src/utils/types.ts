export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  phone: string;
  domain: string;
  company: { name: string };
}
