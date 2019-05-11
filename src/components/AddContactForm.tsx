import { FormikProps } from 'formik';
import React, { Fragment } from 'react';

import * as strings from '../locales/strings.json';
import { Contact } from '../types/contact';
import Button from './Button';
import FormText from './FormText';
import Header from './Header';

export interface Props<P> {
  props: FormikProps<P>;
}

const MAX_EMAILS = 5;

function getAddEmail(props: FormikProps<Contact>) {
  return (): void => {};
}

function renderEmails(props: FormikProps<Contact>): React.ReactElement {
  return (
    <Fragment>
      <Header>{strings.email}</Header>
      {props.values.emails.map((email, index) => (
        <FormText
          key={email}
          title={strings.email}
          value={email}
          onBlur={props.handleBlur(`email[${index}]`)}
          onChangeText={props.handleChange(`email[${index}]`)}
        />
      ))}
      <Button
        disabled={props.values.emails.length >= MAX_EMAILS}
        onPress={getAddEmail(props)}
        title={strings.addEmail}
      />
    </Fragment>
  );
}

function AddContactForm({ props }: Props<Contact>): React.ReactElement {
  return (
    <Fragment>
      <Header>{strings.addContact}</Header>
      {renderEmails(props)}
      <Button
        disabled={!props.isValid}
        onPress={props.handleSubmit as (e: any) => void}
        title={'Submit'}
      />
    </Fragment>
  );
}

export default AddContactForm;
