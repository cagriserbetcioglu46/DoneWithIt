import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";


export default function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/prosetlogo328-128.png")} />

            <StatusBar style="auto" />
            <View style={styles.buttonView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Kullanıcı Adı"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.buttonView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Şifre"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

                <TouchableOpacity style={styles.buttonView}>
                    <Text style={styles.loginText}>Kayıt Ol</Text>
                </TouchableOpacity>
          
            


            <TouchableOpacity style={styles.kayitBtn}>
                <Text style={styles.loginText}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCE9D8",
    },

    image: {
        marginBottom: 0,
    },

    buttonView: {
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth: 1.,
        borderColor: "#000",
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },

    TextInput: {
        height: 50,
        flex: 1,
        textAlign: "center",
        padding: 10,
    },


    signUp_button: {
        height: 30,
        marginBottom: 10,
        fontSize: 16,
        color: "#a5240b",
    },

    loginText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },

});
