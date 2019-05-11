export interface Contact {
  emails: string[];
  firstName: string;
  lastName: string;
  middleName: string;
}

export type ContactLike = { [key in keyof Contact]: any };
