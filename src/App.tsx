import React, { Fragment } from 'react';
import { Alert, Button, ScrollView, Text, View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import styles from './styles/styles';
import FormText from './components/FormText';

interface Values {
  email: string;
}

const contactFormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const initialValues: Values = {
  email: '',
};

function displayResults(values: Values): void {
  Alert.alert('Results', JSON.stringify(values));
}

function renderForm(props: FormikProps<Values>): React.ReactElement {
  return (
    <Fragment>
      <FormText
        title={'Email'}
        value={props.values.email}
        onBlur={props.handleBlur('email')}
        onChangeText={props.handleChange('email')}
      />
      <Text style={styles.description}>To get started, edit App.js</Text>
    </Fragment>
  );
}

function App(): React.ReactElement {
  return (
    <ScrollView>
      <Text style={styles.title}>Add a contact</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={displayResults}
        validationSchema={contactFormSchema}
      >
        {(props: FormikProps<Values>): React.ReactElement => (
          <Fragment>
            {renderForm(props)}
            <Button
              disabled={!props.isValid}
              onPress={props.handleSubmit as (e) => void}
              title={'Submit'}
            />
          </Fragment>
        )}
      </Formik>
    </ScrollView>
  );
}

export default App;
