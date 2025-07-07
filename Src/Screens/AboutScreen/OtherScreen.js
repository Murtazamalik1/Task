
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function OtherScreen() {

    const navigation = useNavigation();

    const [selectedGender, setSelectedGender] = useState(null);

    const genders = ['Male', 'Female', 'Other'];

    return (
        <View style={styles.container}>
            {/* Back Arrow */}
            <TouchableOpacity style={styles.backBtn}>
                <Icon name="chevron-left" size={24} color="#757575" />
            </TouchableOpacity>

            <Text style={styles.heading}>A little about you so we match better</Text>

            {/* Date of Birth */}
            <Text style={styles.label}>Date of Birth</Text>
            <View style={styles.dobRow}>
                <TextInput placeholder="DD" style={styles.dobInput} placeholderTextColor="#000" />
                <TextInput placeholder="MM" style={styles.dobInput} placeholderTextColor="#000" />
                <TextInput placeholder="YYYY" style={styles.dobInput} placeholderTextColor="#000" />
            </View>

            {/* Gender */}
            <Text style={styles.label}>Gender</Text>
            <View style={styles.dobRow}>
                {genders.map((gender) => (
                    <TouchableOpacity
                        key={gender}
                        style={[
                            styles.genderBtn,
                            selectedGender === gender && styles.selectedGenderBtn,
                        ]}
                        onPress={() => setSelectedGender(gender)}
                    >
                        <Text
                            style={[
                                styles.genderText,
                                selectedGender === gender && { color: '#fff' },
                            ]}
                        >
                            {gender}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                placeholder="Write Here"
                placeholderTextColor="#999"
                style={styles.locationInput}
            />

            <Text style={styles.label}>
                Location <Text style={styles.locationNote}>(City, Country)</Text>
            </Text>
            <TextInput
                placeholderTextColor="#999"
                style={styles.locationInput}
            />

            <View style={styles.currentLocRow}>
                <Icon name="location-pin" size={18} color="#2E3A3F" />
                <Text style={styles.useCurrentLoc}> Use current location</Text>
            </View>


            <View style={styles.centerAlign}>
                <TouchableOpacity onPress={() => navigation.navigate('Relationship')} style={styles.continueBtn}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.footerNote}>Who are you open to connecting with?</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ec4b6',
        paddingHorizontal: 24,
        paddingTop: 60,
    },

    backBtn: {
        marginBottom: 12,
        top: -20
    },

    heading: {
        height: 30,
        fontSize: 20,
        fontWeight: '700',
        color: '#000000',
        marginBottom: 24,
        fontFamily: 'Poppins',
    },

    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
        fontFamily: 'Poppins',
    },

    dobRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },

    dobInput: {
        width: '30%',
        height: 56,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 16,
        color: '#000',
    },

    genderBtn: {
        width: '30%',
        height: 56,
        backgroundColor: '#fff',
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    genderText: {
        fontSize: 14,
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'Poppins',
    },

    locationNote: {
        fontWeight: '400',
        fontSize: 13,
    },

    locationInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 16,
        height: 50,
        fontSize: 16,
        marginBottom: 16,
        color: '#000',
    },

    currentLocRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
    },

    selectedGenderBtn: {
        backgroundColor: '#2E3A3F',
    },


    useCurrentLoc: {
        fontSize: 15,
        color: '#000000',
        fontWeight: '400',
        fontFamily: 'Poppins',
    },

    centerAlign: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    },

    continueBtn: {
        backgroundColor: '#2E3A3F',
        height: 56,
        width: 194,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        top: 60
    },

    continueText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Poppins',
    },

    footerNote: {
        textAlign: 'center',
        fontSize: 13,
        color: '#000',
        top: 63,
        fontWeight: '400',
        fontFamily: 'Inter',
        left: 3
    },
});
