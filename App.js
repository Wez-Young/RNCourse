import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.goalInput} placeholder="Your goals!!" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    padding: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  goalInput: {
    borderWidth: 1,
    borderColor: '#8eb1af',
    width: '80%',
    marginRight: 10,
    padding: 8,
  }

});
