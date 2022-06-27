import { StyleSheet, View, Text } from 'react-native';

function GoalItem(props) {
    return (
        <View elevation={5} style={styles.listItem}>
          <Text style={styles.listItemText}>{props.text}</Text>
        </View>
      );
}

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        width:'95%',
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
});