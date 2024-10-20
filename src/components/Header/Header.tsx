//import liraries
import React, { Dispatch } from "react";
import { View, Text, Pressable,Image } from "react-native";

// create a component

type HeaderProp = {
  handleReset: () => void;
  setIsPressed: (value: string | null) => void;
  isPressed: string;
};

const Header: React.FC<HeaderProp> = ({
  handleReset,
  setIsPressed,
  isPressed,
}) => {
  return (
    <>
      <View className="flex justify-between items-center flex-row mt-20 mb-3 ">
       {/** <Text className={`font-black text-4xl mx-2  text-slate-500 p-3 `}>
          POMODORO
        </Text> */}

       <View className="flex flex-row justify-center items-center ml-2">
       <Image
        source={require("./../../../assets/logo.png")}
        style={{width:50,height:40 ,borderRadius:20}}
        resizeMode="contain"
        />
        <Text className="text-red-500 font-black text-3xl" >Pomodoro</Text>
       </View>

        <Pressable
          className="border-inherit bg-stone-800/10  rounded-full  mr-3"
          onPress={handleReset}
          onPressIn={() => setIsPressed("setear")} // Cambia estado al presionar
          onPressOut={() => setIsPressed(null)} // Cambia estado al soltar
          style={{
            transform: [{ scale: isPressed === "setear" ? 1.1 : 1 }], // Escala al presionar
          }}
        >
          <Text className="text-white  font-sm text-xl text-center px-4 ">
            Setear
          </Text>
        </Pressable>
      </View>
    </>
  );
};

//make this component available to the app
export default Header;
