import React, { Fragment } from 'react';
import DatePicker from 'react-native-datepicker';

import Header from '../components/Header';
import * as strings from '../locales/strings.json';

interface Props {
  birthday?: Date;
  handleBlur(key: string): any;
  handleChange(key: string): any;
}

function getUpdateDate(
  fieldName: string,
  handleChange: (key: string) => any,
): (_dateStr: string, date: Date) => void {
  return (_dateString: string, date: Date): void => {
    handleChange(fieldName)(date);
  };
}

function CustomSection({ birthday, handleChange }: Props): React.ReactElement {
  return (
    <Fragment>
      <Header>{strings.custom}</Header>
      <DatePicker
        date={birthday}
        format={'YYYY-MM-DD'}
        mode={'date'}
        onDateChange={getUpdateDate('birthday', handleChange)}
        placeholder={strings.selectDate}
      />
    </Fragment>
  );
}

export default CustomSection;
