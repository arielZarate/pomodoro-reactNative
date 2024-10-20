//import liraries
import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TimerModes } from "@/interfaces/IPomo";

import hookPomodoro from "@/hook/hookPomodoro";
import Menu from "../MenuTop/Menu";
import Header from "../Header/Header";
import Display from "../Display/Display";

// create a component
const HomePage = () => {
  const {
    time,
    selectedMode,
    selectedColor,
    selectedBorderColor,
    setSelectedMode,
    setIsRunning,
    isRunning,
    isPressed,
    setIsPressed,
    handleReset,
    handleChangeButton,
    formatTime,
  } = hookPomodoro();

///console.log("home",selectedBorderColor)

  const arrayTimerModes = [
    { time: 25, name: TimerModes.POMODORO },
    { time: 15, name: TimerModes.LONG_BREAK },
    { time: 5, name: TimerModes.SHORT_BREAK },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: selectedColor }}>
      <StatusBar style="auto" />
      <Header
        handleReset={handleReset}
        setIsPressed={setIsPressed}
        isPressed={isPressed}
      />
      <Menu
        arrayTimerModes={arrayTimerModes}
        setSelectedMode={setSelectedMode}
        setIsPressed={setIsPressed}
        isPressed={isPressed}
      />

      <Display
        formatTime={formatTime}
        isRunning={isRunning}
        handleChangeButton={handleChangeButton}
        selectedBorderColor={selectedBorderColor}
        setIsPressed={setIsPressed}
        isPressed={isPressed}
      />
    </View>
  );
};

export default HomePage;
