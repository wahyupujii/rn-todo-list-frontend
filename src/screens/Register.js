import { View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Text, TextInput, Button } from 'react-native-paper'
import axios from "axios";

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        axios.post("http://10.0.2.2:3000/users/register", {
            name: name,
            email: email,
            password: password
        })
            .then(res => {
                navigation.navigate("Home", {
                    ...res.data.data
                })
            })
            .catch(err => console.log(err));
    }

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
                style={{
                    alignItems: "center",
                    width: "100%"
                }}
            >
                <Text variant='titleLarge'>Welcome</Text>
                <Text variant='bodyLarge'>Lorem ipsum dolor sit amet, cons</Text>
                <Image
                    style={{ marginVertical: 20 }}
                    source={require("../assets/loginImage.png")}
                />

                <TextInput
                    style={{
                        width: "80%",
                        marginTop: 10
                    }}
                    mode="outlined"
                    label="Name"
                    onChangeText={(name) => setName(name)}
                />
                <TextInput
                    style={{
                        width: "80%",
                        marginTop: 10
                    }}
                    mode="outlined"
                    label="Email"
                    onChangeText={(email) => setEmail(email)}
                />
                <TextInput
                    style={{
                        width: "80%",
                        marginTop: 10
                    }}
                    mode="outlined"
                    label="Password"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />

                <View
                    style={{
                        marginVertical: 20,
                        flexDirection: "row", alignItems: "center"
                    }}
                >
                    <Text>Have an account ? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text>Login</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{ width: "60%" }} onPress={submit} >
                    <Button mode='contained'>Register</Button>
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
        </View>
    )
}

export default Register
