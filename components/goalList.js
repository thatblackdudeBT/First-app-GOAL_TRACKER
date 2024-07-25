import { StyleSheet, View, Text, Button, Pressable } from "react-native";

const GoalList = (props) => {
  return (
    <View style={styles.goalRow}>
      <View style={styles.goalItem}>
        <Pressable android_ripple={{ color: "#3a3458" }}>
          <Text style={styles.goalText}>{props.goalItem}</Text>
        </Pressable>
      </View>
      <Button
        color="#766bb1"
        title="Delete"
        onPress={() => props.deleteItem(props.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  goalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalItem: {
    margin: 8,
    borderRadius: 5,
    backgroundColor: "#766bb1",
    width: "80%",
  },

  goalText: {
    color: "white",
    padding: 15,
  },
});

export default GoalList;
