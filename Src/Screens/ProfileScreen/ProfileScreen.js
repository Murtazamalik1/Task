import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/Image/Profile.png')}
                style={styles.profileImage}
            />

            <Text style={styles.heading}>What should we call you?</Text>

            <View style={styles.inputSection}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    placeholder="Your Name"
                    placeholderTextColor="#999"
                    style={styles.input}
                />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('About')} style={styles.button}>
                <Text style={styles.buttonText}>Lets Get To Know You</Text>
            </TouchableOpacity>

            <Text style={styles.caption}>Your safety is our priority</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2ec4b6',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 100,
    },

    profileImage: {
        width: 140,
        height: 140,
        borderRadius: 60,
        marginBottom: 24,
    },

    heading: {
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        color: '#000000',
        marginBottom: 40,
    },

    inputSection: {
        width: '100%',
        marginBottom: 24,
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
        fontFamily: 'Poppins',
    },

    input: {
        height: 56,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
    },

    button: {
        backgroundColor: '#2E3A3F',
        width: 194,
        height: 56,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 14,
    },

    buttonText: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize: 14,
        fontFamily: 'Poppins',
    },

    caption: {
        fontSize: 12,
        color: '#000',
        fontWeight: '400',
        fontFamily: 'Poppins',
    },
});
