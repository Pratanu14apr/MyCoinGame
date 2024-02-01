import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if ((username === 'admin' && password === 'admin1234') || (username === 'guest' && password === 'guest1234')) {
            navigation.navigate('GamePlay');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity onPress={handleLogin} style={styles.btnStyle}>
                <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
        borderRadius: 5
    },
    btnStyle: {
        paddingVertical: 10,
        borderWidth: 0.8,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#40A2E3",
        borderRadius: 5
    },
    btnText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold"
    }
})

