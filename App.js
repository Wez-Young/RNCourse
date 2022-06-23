import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.goalInput} placeholder="Your goals!!" />
        <Button title="Add Goal" />
      </View>
      <View style={styles.listContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 14
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  goalInput: {
    borderWidth: 1,
    borderColor: '#4e4e4e9c',
    marginRight: 10,
    padding: 8,
    width: '70%',
  },
  listContainer: {
    flex: 6,
    alignItems: 'center',
    paddingTop: 15,
  }
});
