import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [inputtedGoalText, setInputtedGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function inputGoalHandler(inputtedText) {
    setInputtedGoalText(inputtedText);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      inputtedGoalText,
    ]);
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.goalInput}
          placeholder="Input a goal"
          onChangeText={inputGoalHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.listContainer}>
        <ScrollView style={styles.scrollContainer}>
          {courseGoals.map((goal) =>
            <View elevation={5} style={styles.listItem}>
              <Text style={styles.listItemText} key={goal}> {goal}</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 14,
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
    width: '100%',
  },
  listItem: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 8,
    padding: 5,
    alignItems: 'center',
  },
  listItemText: {
    fontStyle: 'italic',
  },
  scrollContainer: {
    width: '90%'
  },
});
