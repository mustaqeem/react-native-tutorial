import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  Alert,
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState(["a", "b"]);

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      enteredGoal
    ]);
    setEnteredGoal('');
  };

  const removeGoalHandler = (index) => {
    Alert.alert(
      'Do you really want to delete',
      courseGoals[index],
      [
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => {
          console.log('Yes Pressed');
          setCourseGoals(currentGoals => currentGoals.filter((item, ind) => (ind != index)));
        }},
      ],
      {cancelable: true},
    );
  }

  const getListViewItem = (itemData) => {
    Alert.alert(itemData.key, itemData.item);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        >{enteredGoal}</TextInput>
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={courseGoals}
        renderItem={itemData => (
          <View style={styles.listContainer}>
            <Text style={styles.goal} onPress={() => getListViewItem(itemData)}>{itemData.item}</Text>
            <Button title="-" onPress={() => removeGoalHandler(itemData.index)} />
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  "screen": {
    padding: 50,
  },
  inputContainer:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 8,
  },
  listContainer:{
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#ccc',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  goal:{
    width: '80%',
    padding: 10
  }
});
