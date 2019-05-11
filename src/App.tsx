import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Alert, ScrollView } from 'react-native';
import * as Yup from 'yup';

import AddContactForm from './form/AddContactForm';
import { Contact } from './types/contact';

const contactFormSchema = Yup.object().shape({
  emails: Yup.array().of(
    Yup.string()
      .email('Invalid email')
      .required('Required'),
  ),
});

const initialValues: Contact = {
  emails: [],
};

function displayResults(contact: Contact): void {
  Alert.alert('Results', JSON.stringify(contact));
}

function App(): React.ReactElement {
  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        onSubmit={displayResults}
        validationSchema={contactFormSchema}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          isValid,
          values,
        }: FormikProps<Contact>): React.ReactElement => (
          <AddContactForm
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isValid={isValid}
            values={values}
            validationSchema={contactFormSchema}
          />
        )}
      </Formik>
    </ScrollView>
  );
}

export default App;
