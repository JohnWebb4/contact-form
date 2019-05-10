import React from 'react';
import { Alert, Button, ScrollView, Text, View } from 'react-native';
import { Formik, FormikProps } from 'formik';

import styles from './styles/styles';
import FormText from './components/FormText';

interface Values {
  email: string;
}

function displayResults(values: Values): void {
  Alert.alert('Results', JSON.stringify(values));
}

function renderForm(props: FormikProps<Values>): React.ReactElement {
  return (
    <ScrollView>
      <Text style={styles.title}>Add a contact</Text>
      <FormText
        title={'Email'}
        value={props.values.email}
        onBlur={props.handleBlur('email')}
        onChangeText={props.handleChange('email')}
      />
      <Text style={styles.description}>To get started, edit App.js</Text>
    </ScrollView>
  );
}

const initialValues = {
  email: '',
};

function App(): React.ReactElement {
  return (
    <Formik initialValues={initialValues} onSubmit={displayResults}>
      {(props: FormikProps<Values>): React.ReactElement => (
        <View style={styles.container}>
          {renderForm(props)}
          <Button
            disabled={props.isValid}
            onPress={props.handleSubmit as (e) => void}
            title={'Submit'}
          />
        </View>
      )}
    </Formik>
  );
}

export default App;
