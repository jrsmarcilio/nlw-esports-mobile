import { Text, View, ViewProps } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ subtitle: subtitle, title, ...rest }: Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}