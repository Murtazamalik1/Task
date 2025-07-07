import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('SinUp');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Logo/Logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>OkaBoka</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ec4b6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 194,
        height: 194,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 16,
    },
});
