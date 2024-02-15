import { StyleSheet, Text, View } from 'react-native';
import Position from './components/Position';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Weather</Text>
      <Position/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});