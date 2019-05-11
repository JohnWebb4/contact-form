import { FieldArray, FieldArrayRenderProps } from 'formik';
import React, { Fragment } from 'react';

import * as strings from '../locales/strings.json';
import { Contact } from '../types/contact';
import Button from '../components/Button';
import FormText from '../components/FormText';
import Header from '../components/Header';

export interface Props {
  isValid: boolean;
  values: Contact;
  handleBlur(e: any): any;
  handleChange(e: any): any;
  handleSubmit(): any;
}

const MAX_EMAILS = 5;

function getAddEmail(arrayHelpers: FieldArrayRenderProps) {
  return (): void => {
    arrayHelpers.push('');
  };
}

function renderEmails(
  emails: string[],
  handleChange: (key: string) => any,
  handleBlur: (key: string) => any,
): React.ReactElement {
  return (
    <FieldArray
      name="emails"
      render={arrayHelpers => (
        <Fragment>
          <Header>{strings.email}</Header>
          {emails.map((email, index) => (
            <FormText
              key={email}
              title={strings.email}
              value={email}
              onBlur={handleBlur(`email[${index}]`)}
              onChangeText={handleChange(`email[${index}]`)}
            />
          ))}
          <Button
            disabled={emails.length >= MAX_EMAILS}
            onPress={getAddEmail(arrayHelpers)}
            title={strings.addEmail}
          />
        </Fragment>
      )}
    />
  );
}

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
      {renderEmails(values.emails, handleChange, handleBlur)}
      <Button
        disabled={!isValid}
        onPress={handleSubmit as any}
        title={'Submit'}
      />
    </Fragment>
  );
}

export default AddContactForm;
