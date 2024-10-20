//import liraries
import React, { Component } from "react";
import { View, Text, Pressable } from "react-native";
import useHookPomodoro from "@/context/HookPomodoro";
import { TimerModes } from "@/interfaces/IPomo";
import hookPomodoro from "@/context/HookPomodoro";
// create a component

type TimerMode = {
  time: number;
  name: TimerModes;
};

type MenuProps = {
  arrayTimerModes: TimerMode[];
  setSelectedMode: (mode: TimerModes) => void;
  setIsPressed: (isPressed: string | null) => void;
  isPressed: string;
};

const Menu: React.FC<MenuProps> = ({
  arrayTimerModes,
  setSelectedMode,
  setIsPressed,
  isPressed,
}) => {
  //  const {setSelectedMode, setIsPressed, isPressed } =useHookPomodoro();

  return (
    <View className="flex flex-row  w-full justify-evenly mx-1 g-2 mt-1">
      {arrayTimerModes.map((item: any, index: number) => {
        return (
          <View key={index}>
            <Pressable
              className={`rounded-full `}
              onPress={() => {
                setSelectedMode(item.name);
              }}
              onPressIn={() => setIsPressed(item.name)} // Cambiar el estado al presionar
              onPressOut={() => setIsPressed(null)} // Restablecer estado al soltar
              style={{
                transform: [{ scale: isPressed === item.name ? 1.1 : 1 }], // Solo el botón presionado cambia de escala
              }}
            >
              <View
                className={`flex justify-center item border-inherit  bg-slate-900/20  h-28 w-28 mx-auto`}
              >
                <Text className={`font-bold text-white text-center text-6xl`}>
                  {item.time}
                </Text>

                <Text className={`text-white text-center font-medium`}>
                  {item.name}
                </Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

export default Menu;
