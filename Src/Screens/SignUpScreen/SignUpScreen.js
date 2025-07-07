import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function SignUp() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Welcome to okaBoka
            </Text>
            <Text style={styles.subheading}>
                Connect with emotionally similar people
            </Text>

            <Image
                source={require('../../assets/Logo/Logo.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.helperText}>
                Let’s start with your number your world begins here.
            </Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    keyboardType="phone-pad"
                    style={styles.input}
                />
            </View>

            <Text style={styles.orText}>or</Text>

            <TouchableOpacity style={styles.whatsappBtn}>
                <Text style={styles.whatsappText}>Continue With Whatsapp</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Vrify')} style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>Send Me The Code</Text>
            </TouchableOpacity>

            <Text style={styles.privacy}>We’ll never share your number</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2ec4b6',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 60,
    },

    heading: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 24,
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: 'center',
        color: '#000000',
        width: 259,
        height: 36,
    },

    subheading: {
        height: 18,
        width: 242,
        fontSize: 12,
        color: '#000000',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'Poppins',
    },

    logo: {
        width: 194,
        height: 194,
        marginBottom: 20,
        borderRadius: 0.25,
        borderColor: '#00000033'
    },

    helperText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 10,
        width: 338,
        height: 48,
        fontFamily: 'Poppins',
    },

    inputContainer: {
        width: '100%',
        marginBottom: 12,

    },

    label: {
        width: 122,
        height: 24,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 6,
        fontSize: 16,
        fontFamily: 'Poppins',
    },

    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
    },

    orText: {
        color: '#000000',
        fontSize: 16,
        fontFamily: 'Inter',
        marginBottom: 12,
        width: 16,
        height: 19
    },

    whatsappBtn: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
        marginBottom: 16,
    },

    whatsappText: {
        fontWeight: '500',
        color: '#000',
        fontSize: 16,
    },

    primaryBtn: {
        backgroundColor: '#2E3A3F',
        width: 194,
        height: 56,
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },

    primaryBtnText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 14,
        fontFamily: 'Poppins',
        top: 5
    },

    privacy: {
        color: '#000000',
        fontSize: 12,
        marginTop: 16,
        width: 182,
        height: 18,
        fontWeight: '400',
        left: 18,
        fontFamily: 'Poppins',
    },

});
