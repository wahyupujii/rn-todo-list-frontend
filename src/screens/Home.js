import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Text, TextInput, MD2Colors } from 'react-native-paper'
import axios from "axios"

const Home = ({ route }) => {
    const [todos, getTodos] = useState([]);
    const [todoControl, setTodoControl] = useState(0)
    const [todo, setTodo] = useState("")
    const [loading, setLoading] = useState(true);

    const userID = route.params.id

    useEffect(() => {
        axios.get("http://10.0.2.2:3000/todos", {
            params: {
                userID: userID
            }
        })
            .then((res) => {
                getTodos(res.data.data)
                setTodoControl(res.data.data.length)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, [todoControl])

    const addTodo = () => {
        axios.post("http://10.0.2.2:3000/todos", {
            todo, userID
        })
            .then(() => {
                setTodo("")
                setTodoControl(todoControl + 1);
            })
            .catch(err => console.log(err))
    }

    const checkTodo = (item) => {
        let check = !item.isChecked
        axios.put("http://10.0.2.2:3000/todos", {
            todoID: item.id,
            checked: check
        }).then(() => {
            setTodoControl(todoControl + 1)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                flex: 1,
                paddingHorizontal: 20,
                paddingVertical: 20,
                backgroundColor: "#fff",
            }}
        >
            <View
                style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 5
                }}
            >

                <Text variant='headlineLarge'>Task List</Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20
                    }}
                >
                    <TextInput
                        placeholder='Add todo'
                        mode='contained'
                        style={{
                            width: "70%",
                            borderRadius: 5,
                            marginRight: 10
                        }}
                        value={todo}
                        onChangeText={(todo) => setTodo(todo)}
                    />
                    <TouchableOpacity
                        onPress={addTodo}
                    >
                        <Image
                            style={{
                                width: 40,
                                height: 40
                            }}
                            source={require("../assets/plusIcon.png")}
                        />
                    </TouchableOpacity>
                </View>

                {
                    loading ? (
                        <ActivityIndicator
                            style={{
                                marginTop: 20
                            }}
                            animating color={MD2Colors.red800}
                        />
                    ) : todos.length !== 0 ? (
                        todos.map((item, id) => {
                            return (
                                <View
                                    key={id}
                                    style={{
                                        marginTop: 20,
                                        width: "100%",
                                    }}
                                >
                                    <View
                                        style={{ flexDirection: "row", alignItems: "center" }}
                                    >
                                        <TouchableOpacity
                                            style={{
                                                width: 34,
                                                height: 31,
                                                backgroundColor: item.isChecked ? "#15A808" : "#f0f0f0",
                                                borderRadius: 8,
                                                marginRight: 20
                                            }}
                                            onPress={() => checkTodo(item)}
                                        ></TouchableOpacity>
                                        <Text variant='bodyLarge'>{item.todo}</Text>
                                    </View>
                                </View>
                            )
                        })
                    ) : (
                        <Text variant='bodyLarge'>Todos Empty</Text>
                    )
                }
            </View>
        </ScrollView>
    )
}

export default Home