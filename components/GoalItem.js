import React from "react";
import { StyleSheet, Text, Button, View, Alert } from "react-native";

const GoalItem = props => {
  const getListViewItem = itemData => {
    Alert.alert(itemData.key, itemData.item);
  };

  return (
    <View style={styles.listContainer}>
      <Text style={styles.goal} onPress={() => getListViewItem(props.itemData)}>
        {props.itemData.item}
      </Text>
      <Button
        color="red"
        title="-"
        onPress={() => props.onRemove(props.itemData.index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#ccc"
  },
  goal: {
    width: "80%",
    padding: 10
  },
  removeButton: {
    color: "red"
  }
});

export default GoalItem;
