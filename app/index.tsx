import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle= {{height: '100%'}}>

            <StatusBar backgroundColor="#161622" style="light" />

                <View className="flex items-center justify-center min-h-[85vh]">
                    <Text className="text-white font-bold text-3xl p-10 mb-20">Welcome to Medibit !</Text>
                    <CustomButton title="Sign in" handlePress={() => router.push("/Signin")} containerStyles="w-full mb-10" textStyles={undefined} isLoading={undefined} />
                    <CustomButton title="Sign up" handlePress={() => router.push("/Signup")} containerStyles="w-full" textStyles={undefined} isLoading={undefined} />
                </View>
                


        </ScrollView>
    </SafeAreaView>
  );
}
