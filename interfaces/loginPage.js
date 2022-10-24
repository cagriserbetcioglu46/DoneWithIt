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
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Kullanıcı Adı"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity>
                <Text style={styles.forgot_button}>Kayıt Ol</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#FCE9D8",
    },

    image: {
        marginBottom: 10,
    },

    inputView: {
        backgroundColor: "#fff",
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor:"#000",
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        textAlign: "center",
        padding: 10,
    },


    forgot_button: {
        height: 30,
        marginBottom: 10,
    },

    loginBtn: {
        width: "40%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "#006400",
    },
    loginText: {
        color: "#fff",
      
    },

});
