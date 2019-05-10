import { StyleSheet } from 'react-native';

import colors from './colors';
// import spacing from './spacing';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    flex: 1,
  },
  description: {
    color: colors.grey,
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
  },
});

export default styles;
