import {View, TextInput, Button, StyleSheet} from 'react-native';
import { useState } from 'react';

function GoalInput(props){

    const [inputtedGoalText, setInputtedGoalText] = useState("");

    function inputGoalHandler(inputtedText) {
        setInputtedGoalText(inputtedText);
      }

    function addGoalHandler() {
        props.AddGoal(inputtedGoalText);
        setInputtedGoalText('');
    }

    return (<View style={styles.inputContainer}>
        <TextInput
          style={styles.goalInput}
          placeholder="Input a goal"
          onChangeText={inputGoalHandler}
          value={inputtedGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
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
})