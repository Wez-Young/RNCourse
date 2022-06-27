import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [inputtedGoalText, setInputtedGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function inputGoalHandler(inputtedText) {
    setInputtedGoalText(inputtedText);
  }
  function addGoalHandler() {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        text: inputtedGoalText
      },
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
        <FlatList data={courseGoals}
        renderItem={itemData => {
          return (
            <View elevation={5} style={styles.listItem}>
              <Text style={styles.listItemText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        alwaysBounceVertical={false}/>
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
    shadowOffset: { width: 2, height: 3},
  shadowColor: 'black',
  shadowOpacity: 0.3,
  elevation: 3,
  },
  listItemText: {

  },
  scrollContainer: {
    width: '90%'
  },
});
