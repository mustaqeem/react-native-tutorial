import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  FlatList,
  Alert
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
    setIsAddMode(false);
  };

  const removeGoalHandler = index => {
    Alert.alert(
      "Do you really want to delete",
      courseGoals[index],
      [
        {
          text: "No",
          onPress: () => console.log("No Pressed"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Yes Pressed");
            setCourseGoals(currentGoals =>
              currentGoals.filter((item, ind) => ind != index)
            );
          }
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Goals" onPress={() => setIsAddMode(true)}></Button>
      <GoalInput
        setIsAddMode={setIsAddMode}
        visible={isAddMode}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem onRemove={removeGoalHandler} itemData={itemData} />
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
