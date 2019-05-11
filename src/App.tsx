import { Formik, FormikProps } from 'formik';
import React from 'react';
import { Alert, ScrollView } from 'react-native';
import * as Yup from 'yup';

import AddContactForm from './components/AddContactForm';
import { Contact } from './types/contact';

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
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
        {(props: FormikProps<Contact>): React.ReactElement => (
          <AddContactForm props={props} />
        )}
      </Formik>
    </ScrollView>
  );
}

export default App;
