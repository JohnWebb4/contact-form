import * as Yup from 'yup';

import { ContactLike } from '../types/contact';

const contactFields: ContactLike = {
  birthday: Yup.date(),
  emails: Yup.array().of(
    Yup.string()
      .email('Invalid email')
      .required('Required'),
  ),
  firstName: Yup.string().when(
    'lastName',
    (lastName: string, schema: Yup.StringSchema): Yup.StringSchema =>
      lastName ? schema : schema.required(),
  ),
  lastName: Yup.string(),
  middleName: Yup.string(),
};

const contactSchema = Yup.object().shape(contactFields);

export default contactSchema;
