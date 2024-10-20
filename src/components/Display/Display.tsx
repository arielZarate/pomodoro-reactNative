//import liraries
import React from "react";
import { View, Text, Pressable } from "react-native";
import { IconPlay, IconPause } from "../Icons/Icons";
import { COLOR } from "@/interfaces/IPomo";

///props
type DisplayProp = {
  formatTime: () => string;
  isRunning: boolean;
  setIsPressed: (value: string | null) => void;
  isPressed: string;
  handleChangeButton: () => void;
  selectedBorderColor: COLOR;
};

const Display: React.FC<DisplayProp> = ({
  formatTime,
  isRunning,
  setIsPressed,
  isPressed,
  handleChangeButton,
  selectedBorderColor,
}) => {
  return (
    <>
      {/* Ring alrededor del contador */}
      <View className="flex justify-center items-center mx-auto mt-24">
        <View
          className={`w-56 h-56 rounded-full  `}
          style={{
            borderColor: selectedBorderColor,
            borderWidth: 12,
            borderStyle: "solid",
          }}
        >
          <View
            className={`flex justify-center items-center w-full h-full bg-slate-900/20 rounded-full`}
          >
            <Text className="text-slate-100 font-bold text-6xl text-center">
              {formatTime()}
            </Text>
          </View>
        </View>
      </View>
      {/**boton de inicio */}
      <View className=" mx-auto mt-10  ">
        <Pressable
          onPress={handleChangeButton}
          onPressIn={() => setIsPressed("play")} // Cambia estado al presionar
          onPressOut={() => setIsPressed(null)} // Cambia estado al soltar
          style={{
            transform: [{ scale: isPressed === "play" ? 1.1 : 1 }], // Escala al presionar
          }}
        >
          <View className="flex justify-center items-center">
            {isRunning ? (
              <>
                <IconPause props="white" />
                <Text className=" font-bold text-2xl text-slate-600">
                  Pausar
                </Text>
              </>
            ) : (
              <>
                <IconPlay />
                <Text className="font-bold text-2xl text-slate-600">
                  Comenzar
                </Text>
              </>
            )}
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default Display;
