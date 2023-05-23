import React, { useCallback, useMemo, useRef } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { TextWithIcon } from "../../molecules";

const BaseModal = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  const renderHandle = useCallback(() => (
    <View style={styles.handle}>
      <View style={styles.handleBar} />
      <View style={styles.handleBar} />
    </View>
  ), []);

  const renderContent = useCallback(() => (
    <View style={styles.contentContainer}>
      <TextWithIcon icon="Bell" text="hello" size={"big"} ></TextWithIcon>
    </View>
  ), []);

  return (
    <TouchableWithoutFeedback onPress={() => bottomSheetRef.current?.close()}>
      <View style={styles.container}>
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          handleComponent={renderHandle}
          enablePanDownToClose
          handleIndicatorStyle={{ backgroundColor: "#ccc" }}
        >
          {renderContent()}
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  handle: {
    height: 36,
    width: 40,
    alignSelf: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  handleBar: {
    height: 6,
    width: 40,
    borderRadius: 3,
    backgroundColor: "#ccc",
  },
});

export default BaseModal;