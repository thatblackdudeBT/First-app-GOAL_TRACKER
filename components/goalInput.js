import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [goals, setGoals] = useState("");

  const inputHandler = (enteredText) => {
    setGoals(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(goals);
    setGoals("");
  };

  const hideModal = () => {
    props.onHideModal();
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Input a goal"
          placeholderTextColor="#030303"
          value={goals}
          onChangeText={inputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonContainer1}>
            <Button color="#766bb1" title="Add goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.buttonContainer2}>
            <Button color="#5c2626" title="Close" onPress={hideModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    // padding: 30,
    backgroundColor: "#474444",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },

  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingLeft: 230,
    // margin: 10,
  },
  buttonContainer1: {
    margin: 3,
    width: 100,
  },
  buttonContainer2: {
    margin: 3,
    width: "20%",
  },

  textInput: {
    width: "83%",
    borderWidth: 1,
    borderColor: "#6991e9",
    backgroundColor: "#e1e4e8",
    borderRadius: 5,
    padding: 15,
    margin: 10,
    color: "white",
  },
});

export default GoalInput;
