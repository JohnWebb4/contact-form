import React from 'react';
import { Text } from 'react-native';

import fontSizes from '../styles/fontSizes';
import styles from '../styles/styles';

type HeaderSizeTypes = 1;

export interface Props {
  children: string;
  size?: HeaderSizeTypes;
}

interface HeaderSizeMapType {
  [index: number]: number;
}

const headerSizeMap: HeaderSizeMapType = {
  1: fontSizes.xxlarge,
};

function Header({ children, size = 1 }: Props): React.ReactElement {
  return (
    <Text style={[styles.title, { fontSize: headerSizeMap[size] }]}>
      {children}
    </Text>
  );
}

export default Header;
