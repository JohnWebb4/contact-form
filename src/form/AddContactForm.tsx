import React, { Fragment } from 'react';

import Button from '../components/Button';
import Header from '../components/Header';
import * as strings from '../locales/strings.json';
import { Contact } from '../types/contact';
import CustomSection from './CustomSection';
import EmailSection from './EmailSection';
import GeneralSection from './GeneralSection';

export interface Props {
  isValid: boolean;
  values: Contact;
  handleBlur(e: any): any;
  handleChange(e: any): any;
  handleSubmit(): any;
}

const MAX_EMAILS = 5;

function AddContactForm({
  handleBlur,
  handleChange,
  handleSubmit,
  isValid,
  values,
}: Props): React.ReactElement {
  return (
    <Fragment>
      <Header>{strings.addContact}</Header>

      <GeneralSection
        firstName={values.firstName}
        handleBlur={handleBlur}
        handleChange={handleChange}
        lastName={values.lastName}
        middleName={values.middleName}
      />

      <EmailSection
        emails={values.emails}
        handleBlur={handleBlur}
        handleChange={handleChange}
        maxEmails={MAX_EMAILS}
      />

      <CustomSection
        birthday={values.birthday}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />

      <Button
        disabled={!isValid}
        onPress={handleSubmit as any}
        title={'Submit'}
      />
    </Fragment>
  );
}

export default AddContactForm;
