import React from 'react';
import {
  NativeSyntheticEvent,
  Text,
  TargetedEvent,
  TextInput,
  View,
} from 'react-native';

interface Props {
  title: string;
  value: string;
  onBlur?(e: NativeSyntheticEvent<TargetedEvent>): void;
  onChangeText?(text: string): void;
}

function InputText({
  onBlur,
  onChangeText,
  title,
  value,
}: Props): React.ReactElement {
  return (
    <View>
      <Text>{title}</Text>
      <TextInput onBlur={onBlur} onChangeText={onChangeText} value={value} />
    </View>
  );
}

export default InputText;
