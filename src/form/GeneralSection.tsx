import React, { Fragment } from 'react';

import * as strings from '../locales/strings.json';
import InputText from '../components/InputText';
import Header from '../components/Header';

interface Props {
  firstName: string;
  lastName: string;
  middleName: string;
  handleChange(key: string): any;
  handleBlur(key: string): any;
}

function GeneralSection({
  firstName,
  handleBlur,
  handleChange,
  lastName,
  middleName,
}: Props): React.ReactElement {
  return (
    <Fragment>
      <Header>{strings.general}</Header>

      <InputText
        title={strings.firstName}
        value={firstName}
        onBlur={handleBlur('firstName')}
        onChangeText={handleChange('firstName')}
      />

      <InputText
        title={strings.middleName}
        value={middleName}
        onBlur={handleBlur('middleName')}
        onChangeText={handleChange('middleName')}
      />

      <InputText
        title={strings.lastName}
        value={lastName}
        onBlur={handleBlur('lastName')}
        onChangeText={handleChange('lastName')}
      />
    </Fragment>
  );
}

export default GeneralSection;
