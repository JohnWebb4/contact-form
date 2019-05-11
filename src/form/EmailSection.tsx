import { FieldArray, FieldArrayRenderProps } from 'formik';
import React, { Fragment, useEffect, useState } from 'react';
import { reach } from 'yup';

import Button from '../components/Button';
import FormText from '../components/FormText';
import Header from '../components/Header';
import * as strings from '../locales/strings.json';
import contactSchema from './contactSchema';

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

function EmailSection({
  emails,
  handleBlur,
  handleChange,
  maxEmails,
}: Props): React.ReactElement {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    reach(contactSchema, 'emails')
      .validate(emails)
      .then(() => {
        setIsValid(true);
      })
      .catch(() => {
        setIsValid(false);
      });
  });

  return (
    <FieldArray
      name="emails"
      render={arrayHelpers => (
        <Fragment>
          <Header>{strings.email}</Header>
          {emails.map((email, index) => (
            <FormText
              key={index}
              title={strings.email}
              value={email}
              onBlur={handleBlur(`emails.${index}`)}
              onChangeText={handleChange(`emails.${index}`)}
            />
          ))}

          <Button
            disabled={!isValid && emails.length < maxEmails}
            onPress={getAddEmail(arrayHelpers)}
            title={strings.addEmail}
          />
        </Fragment>
      )}
    />
  );
}

export default EmailSection;
