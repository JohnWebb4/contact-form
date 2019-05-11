export interface Contact {
  birthday?: Date;
  emails: string[];
  firstName: string;
  lastName: string;
  middleName: string;
}

export type ContactLike = { [key in keyof Contact]: any };
