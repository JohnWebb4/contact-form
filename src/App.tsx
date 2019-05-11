import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Alert, ScrollView } from 'react-native';

import AddContactForm from './form/AddContactForm';
import contactSchema from './form/contactSchema';
import { Contact } from './types/contact';

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
        validationSchema={contactSchema}
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
          />
        )}
      </Formik>
    </ScrollView>
  );
}

export default App;
