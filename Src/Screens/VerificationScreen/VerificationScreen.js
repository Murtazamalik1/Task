import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function VerificationScreen() {

    const navigation = useNavigation();
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleChange = (value, index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value.replace(/[^0-9]/g, '');
        setOtp(updatedOtp);
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Logo/Logo.png')}
                style={styles.logo}
            />

            <Text style={styles.heading}>Verify your number</Text>
            <Text style={styles.subheading}>We’ve sent a code to your phone</Text>

            <View style={styles.otpRow}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        value={digit}
                        onChangeText={(value) => handleChange(value, index)}
                        keyboardType="number-pad"
                        maxLength={1}
                        style={styles.otpBox}
                    />
                ))}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.button}>
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>

            <Text style={styles.resend}>
                Didn’t receive code? <Text style={styles.resendBold}>Resend</Text>
            </Text>

            <Text style={styles.timer}>You can request a new code in 4 seconds</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2ec4b6',
        alignItems: 'center',
        paddingTop: 100,
        paddingHorizontal: 24,
    },

    logo: {
        width: 194,
        height: 194,
        marginBottom: 24,
        borderRadius: 0.25,
        borderColor: '#00000033',
    },

    heading: {
        fontSize: 24,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 35,
        top: 30,
        fontFamily: 'Poppins',
    },

    subheading: {
        fontSize: 12,
        color: '#000',
        marginBottom: 32,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '400',
    },

    otpRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 32,
    },

    otpBox: {
        width: 56,
        height: 73,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },

    button: {
        backgroundColor: '#2E3A3F',
        width: 194,
        height: 56,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Poppins',
        fontWeight: '400',
    },

    resend: {
        fontSize: 14,
        color: '#000000',
    },

    resendBold: {
        fontWeight: '600',
    },

    timer: {
        fontSize: 12,
        color: '#000000',
        marginTop: 4,
        fontFamily: 'Poppins',
        fontWeight: '400',

    },
});
