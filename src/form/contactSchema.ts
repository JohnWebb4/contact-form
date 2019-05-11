import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  emails: Yup.array().of(
    Yup.string()
      .email('Invalid email')
      .required('Required'),
  ),
});

export default contactSchema;
