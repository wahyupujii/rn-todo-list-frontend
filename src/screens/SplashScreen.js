import { View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text, Button } from 'react-native-paper'

const SplashScreen = ({ navigation }) => {

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                paddingHorizontal: 20
            }}
        >
            <View
                style={{ alignItems: "center", width: "100%" }}
            >
                <Image
                    source={require("../assets/splashImage.png")}
                />
                <Text variant='labelLarge' style={{ marginVertical: 20 }}>Project Management by Wahyu</Text>
                <Text variant='labelMedium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac cras tortor cursus sit odio bibendum aliquam amet. Volutpat mi non gravida ac amet, sollicitudin.</Text>

                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Button mode='contained' style={{ marginVertical: 30 }}>Get Started</Button>
                </TouchableOpacity>
            </View>
            <Image
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0
                }}
                source={require("../assets/redCircle.png")}
            />
        </View >
    )
}

export default SplashScreen