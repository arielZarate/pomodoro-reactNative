import { COLOR, TimerModes } from "@/interfaces/IPomo";
import React, { useState, useEffect } from "react";

import { Audio } from "expo-av";
import { Vibration } from "react-native";
import { HookPomodoroReturn } from "@/interfaces/IPomo";

export default function hookPomodoro(): HookPomodoroReturn {
  const [time, setTime] = useState(25 * 60);
  const [selectedMode, setSelectedMode] = useState<TimerModes>(
    TimerModes.POMODORO
  );
  const [isRunning, setIsRunning] = useState(false);
  const [selectedColor, setSelectedColor] = useState(COLOR.POMO_COLOR);
  const [selectedBorderColor, setSelectedBorderColor] = useState<COLOR>(COLOR.POMO_BORDER);
  const [isPressed, setIsPressed] = useState<string | null>(null);

 

  useEffect(() => {
    let newTime;
    switch (selectedMode) {
      case TimerModes.LONG_BREAK:
        newTime = 15 * 60;
        setSelectedColor(COLOR.LONG_COLOR);
        setSelectedBorderColor(COLOR.LONG_BORDER);
        break;
      case TimerModes.SHORT_BREAK:
        newTime = 5 * 60;
        setSelectedColor(COLOR.SHORT_COLOR);
        setSelectedBorderColor(COLOR.SHORT_BORDER);
        break;
      case TimerModes.POMODORO:
      default:
        newTime = 25 * 60;
        setSelectedColor(COLOR.POMO_COLOR);
        setSelectedBorderColor(COLOR.POMO_BORDER);
        break;
    }

    setTime(newTime);
    setIsRunning(false);
  }, [selectedMode]);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isRunning && time > 0) {
      timer = setInterval(() => setTime((prevTime) => prevTime - 1), 1000);
    } else if (time === 0) {
      clearInterval(timer as NodeJS.Timeout);
      playSound("end");
      handleReset();
    }

    return () => clearInterval(timer as NodeJS.Timeout);
  }, [isRunning, time]);



  //reset
  const handleReset = () => {
    const newTime =
      selectedMode === TimerModes.POMODORO
        ? 25 * 60
        : selectedMode === TimerModes.SHORT_BREAK
        ? 5 * 60
        : 15 * 60;
    setTime(newTime);
    setIsRunning(false);
  };

  const playSound = async (type: string) => {
    const soundObj = new Audio.Sound();
    try {
      const soundFile =
        type === "start"
          ? require("../Audio/beep-sound.mp3")
          : require("../Audio/level-up.mp3");
      await soundObj.loadAsync(soundFile);
      await soundObj.playAsync();
    } catch (error) {
      console.log("Error playing sound", error);
    }
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  //handlerButton
  const handleChangeButton = () => {
    setIsRunning(!isRunning);
    playSound("start");
    setTimeout(() => {
      Vibration.vibrate(500);
    }, 200);
  };

  return {
    time,
    selectedMode,
    isRunning,
    selectedColor,
    selectedBorderColor,
    setSelectedMode,
    setIsRunning,
    formatTime,
    handleReset,
    handleChangeButton,
    isPressed,
    setIsPressed,
  };
}
