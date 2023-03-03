import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: { flex: 1,padding:20 },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 320,
    height: 320,
  },
  View: { justifyContent: 'center', alignItems: 'center', flexDirection: 'row' },
  ViewColumn: { justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'},
});

export default styles;
