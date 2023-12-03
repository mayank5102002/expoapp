// src/App.tsx
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Link, router } from 'expo-router';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            router.replace({pathname : '/screens/MainPage', params : {name : "expoapp", key : 22}});
            setLoading(false);
        }, 5000);

        return () => {
            clearTimeout(loadingTimeout);
        };
    }, []);

    return (
        <View style={styles.container}>
            {loading && (
                <ActivityIndicator size="large" color="#3498db" />
            )}
            <Text>Splash Screen</Text>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#3498db',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default App;
