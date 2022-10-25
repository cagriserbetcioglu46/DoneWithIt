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
            <View style={styles.logo}>
                <Image style={styles.image} source={require("../images/logo_300x82.jpg")} />
            </View>
            
            <StatusBar style="auto" />
           
            <TouchableOpacity style={styles.menuBtn}>
                <Text style={styles.buttonText}>CARİ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBtn}>
                <Text style={styles.buttonText}>STOK</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuBtn}>
                <Text style={styles.buttonText}>KASA</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#FFCEA0",
    },

    logo: {
        position: "absolute",
        top: 0,
        marginTop: 0,
        width:300,
        height:110,
        backgroundColor:"#FCE9D8",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },

    image: {
        marginTop:28,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },

    menuBtn: {
        width: "40%",
        borderRadius: 5,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        backgroundColor: "#e57700",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },

});
