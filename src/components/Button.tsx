import React from 'react';
import { Button as NativeButton, ButtonProps } from 'react-native';

type Props = ButtonProps

function Button(props: Props): React.ReactElement {
  return <NativeButton {...props} />;
}

export default Button;
