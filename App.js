import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem  from './components/goal_item';
import GoalInput from './components/goal_input';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(inputtedGoalText) {
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
     <GoalInput AddGoal={addGoalHandler}/>
      <View style={styles.listContainer}>

        <FlatList data={courseGoals}
        renderItem={itemData => {
            return <GoalItem text={itemData.item.text}/>;
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
  listContainer: {
    flex: 6,
    alignItems: 'center',
    width: '100%',
  },
  scrollContainer: {
    width: '90%'
  },
});
