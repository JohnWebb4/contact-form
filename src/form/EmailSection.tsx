import { FieldArray, FieldArrayRenderProps } from 'formik';
import React, { Fragment } from 'react';

import * as strings from '../locales/strings.json';
import Button from '../components/Button';
import FormText from '../components/FormText';
import Header from '../components/Header';

interface Props {
  emails: string[];
  maxEmails: number;
  handleChange: (key: string) => any;
  handleBlur: (key: string) => any;
}

function getAddEmail(arrayHelpers: FieldArrayRenderProps) {
  return (): void => {
    arrayHelpers.push('');
  };
}

function canAddAnotherEmail(emails: string[], maxEmails: number): boolean {
  return emails.length < maxEmails && !emails.some((email) => !email);
}

function EmailSection({
  emails,
  handleBlur,
  handleChange,
  maxEmails,
}: Props): React.ReactElement {
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
            disabled={!canAddAnotherEmail(emails, maxEmails)}
            onPress={getAddEmail(arrayHelpers)}
            title={strings.addEmail}
          />
        </Fragment>
      )}
    />
  );
}

export default EmailSection;
