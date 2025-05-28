import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from "react-native";

export default function RegisterScreen({ onClose }: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullName] = useState("");
    const [mobilephone, setMobilePhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleRegister = async () => {
        if (!email || !password || !fullname || !mobilephone) {
            setErrorMessage("Todos los campos son obligatorios");
            return;
        }

        setLoading(true);
        setErrorMessage("");

        try {
            const response = await fetch("http://192.168.1.50:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password,
                    fullname,
                    mobile_phone: mobilephone
                })
            });

            const result = await response.json();

            if (!response.ok) {
                setErrorMessage(result.error || "Error al registrar");
            } else {
                Alert.alert("Éxito", "Usuario registrado con éxito");
                onClose();
            }
        } catch (error) {
            setErrorMessage("Error de conexión con el servidor");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign up</Text>

            <TextInput
                style={styles.input}
                placeholder="admin@mail.com"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="*********"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <TextInput
                style={styles.input}
                placeholder="Your fullname"
                value={fullname}
                onChangeText={setFullName}
            />

            <TextInput
                style={styles.input}
                placeholder="(+57) 000000000"
                value={mobilephone}
                onChangeText={setMobilePhone}
            />

            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleRegister} disabled={loading}>
                {loading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.buttonText}>Register</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity onPress={onClose}>
                <Text style={styles.link}>Back to login</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    input: {
        width: "80%",
        padding: 10,
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc"
    },
    button: {
        marginTop: 20,
        backgroundColor: "#007bff",
        padding: 10,
        borderRadius: 5,
        width: "80%",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold"
    },
    link: {
        marginTop: 10,
        color: "blue",
        textDecorationLine: "underline"
    },
    error: {
        color: "red",
        marginTop: 10
    }
});

