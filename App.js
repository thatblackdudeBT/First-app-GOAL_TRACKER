import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalList from "./components/goalList";
import GoalInput from "./components/goalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addGoalHandler = (goals) => {
    setGoalList((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: goals },
    ]);
    setModalIsVisible(false);
  };

  const deleteItem = (id) => {
    const filteredGoal = goalList.filter((item) => item.id !== id);
    setGoalList(filteredGoal);
  };

  const showModal = () => {
    setModalIsVisible(true);
  };

  const hideModal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <View style={styles.addGoalButton}>
          <Button title="Add new goal" color="#766bb1" onPress={showModal} />
        </View>
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onHideModal={hideModal}
        />

        <View style={styles.goalStyles}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalList
                  id={itemData.item.id}
                  goalItem={itemData.item.text}
                  deleteItem={deleteItem}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 25,
  },

  addGoalButton: {
    flex: 1,
    margin: 50,
    padding: 30,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderColor: "#c3c3da",
  },

  goalStyles: {
    flex: 10,
  },
});
