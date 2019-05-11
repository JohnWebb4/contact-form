import React from 'react';
import { Button as NativeButton, ButtonProps } from 'react-native';

interface Props extends ButtonProps {}

function Button(props: Props): React.ReactElement {
  return <NativeButton {...props} />;
}

export default Button;
