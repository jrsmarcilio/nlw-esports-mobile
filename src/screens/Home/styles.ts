import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 74,
    marginBottom: 48
  },
  contentList: {
    padding: 54,
  },
  label: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8,
    paddingLeft: 14,
  },
  input: {
    height: 40,
    margin: 4,
    borderWidth: 1,
    padding: 14,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 12,
    margin: 9,
  },
});