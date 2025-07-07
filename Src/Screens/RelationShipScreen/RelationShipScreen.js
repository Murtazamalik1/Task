import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function RelationShipScreen() {
    const [selected, setSelected] = useState({
        interestedIn: '',
        relationshipStatus: '',
        areYou: '',
    });
    const navigation = useNavigation();

    const [showFilteredAreYou, setShowFilteredAreYou] = useState(false);

    const [studentCollege, setStudentCollege] = useState('');
    const [studentCurrentlyStudies, setStudentCurrentlyStudies] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
    const [employeeOtherField, setEmployeeOtherField] = useState('');
    const [freelancerWork, setFreelancerWork] = useState('');
    const [otherWork, setOtherWork] = useState('');


    const handleSelect = (key, value) => {
        setSelected((prev) => ({ ...prev, [key]: value }));
        if (key === 'areYou') {
            setStudentCollege('');
            setStudentCurrentlyStudies('');
            setEmployeeRole('');
            setEmployeeOtherField('');
        }
    };

    const handleContinue = () => {
        if (!selected.areYou) {
            Alert.alert('Missing Selection', 'Please select what describes you (Student, Employee, etc).');
            return;
        }

        setShowFilteredAreYou(true);

        if (selected.areYou === 'Student') {
            if (!studentCollege.trim() || !studentCurrentlyStudies.trim()) {
                Alert.alert('Missing Fields', 'Please fill out your college and current studies.');
                return;
            }
        } else if (selected.areYou === 'Employee') {
            if (!employeeRole.trim() || !employeeOtherField.trim()) {
                Alert.alert('Missing Fields', 'Please fill out your role and other info.');
                return;
            }
        } else if (selected.areYou === 'Freelancer') {
            if (!freelancerWork.trim()) {
                Alert.alert('Missing Field', 'Please describe the kind of freelance work you do.');
                return;
            }
        } else if (selected.areYou === 'Other') {
            if (!otherWork.trim()) {
                Alert.alert('Missing Field', 'Please describe the kind of work you do.');
                return;
            }
        }
        navigation.navigate('Home');
    };


    const renderOptions = (key, options) => {
        if (key === 'areYou' && showFilteredAreYou) {
            const option = selected.areYou;
            return (
                <View style={styles.grid}>
                    <TouchableOpacity
                        key={option}
                        style={[styles.optionBox, styles.selectedBox]}
                    >
                        <Text style={[styles.optionText, { color: '#fff' }]}>{option}</Text>
                    </TouchableOpacity>
                </View>
            );
        }

        return (
            <View style={styles.grid}>
                {options.map((option) => (
                    <TouchableOpacity
                        key={option}
                        style={[
                            styles.optionBox,
                            selected[key] === option && styles.selectedBox,
                        ]}
                        onPress={() => handleSelect(key, option)}
                    >
                        <Text
                            style={[
                                styles.optionText,
                                selected[key] === option && { color: '#fff' },
                            ]}
                        >
                            {option}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const renderInterestedInOptions = (key, options) => (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: 10 }}
            contentContainerStyle={{ paddingHorizontal: 5 }}
        >
            {options.map((option) => (
                <TouchableOpacity
                    key={option}
                    style={[
                        styles.optionBoxHorizontal,
                        selected[key] === option && styles.selectedBox,
                    ]}
                    onPress={() => handleSelect(key, option)}
                >
                    <Text
                        style={[
                            styles.optionText,
                            selected[key] === option && {
                                fontSize: 14,
                                fontWeight: '400',
                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                            },
                        ]}
                    >
                        {option}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                <Icon name="chevron-left" size={24} color="#757575" />
            </TouchableOpacity>

            <Text style={styles.header}>
                Let us understand who you're{'\n'}looking for and where you're at.
            </Text>

            <Text style={styles.label}>
                Interested In <Text style={styles.subLabel}>(Who’s energy do you connect with?)</Text>
            </Text>
            {renderInterestedInOptions('interestedIn', ['Male', 'Female', 'Other'])}

            <Text style={styles.label}>Relationship Status</Text>
            {renderOptions('relationshipStatus', ['Single', 'In A Relationship', 'Prefer Not To Say'])}

            <Text style={styles.Sublabel}>Are You</Text>
            {renderOptions('areYou', ['Student', 'Employee', 'Freelancer', 'Other'])}

            {/* Student Fields */}
            {showFilteredAreYou && selected.areYou === 'Student' && (
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>College</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your college"
                        value={studentCollege}
                        onChangeText={setStudentCollege}
                    />
                    <Text style={styles.inputLabel}>Currently Studies</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter current studies"
                        value={studentCurrentlyStudies}
                        onChangeText={setStudentCurrentlyStudies}
                    />
                </View>
            )}

            {/* Employee Fields */}
            {showFilteredAreYou && selected.areYou === 'Employee' && (
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}></Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your role"
                        value={employeeRole}
                        onChangeText={setEmployeeRole}
                    />
                    <Text style={styles.inputLabel}> What’s your role there?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Optional info"
                        value={employeeOtherField}
                        onChangeText={setEmployeeOtherField}
                    />
                </View>
            )}

            {/* Freelance Fields */}
            {showFilteredAreYou && selected.areYou === 'Freelancer' && (
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>What kind of work do you do?</Text>
                    <TextInput
                        style={styles.input}
                        value={freelancerWork}
                        onChangeText={setFreelancerWork}
                    />
                </View>
            )}

            {/* Other Fields */}
            {showFilteredAreYou && selected.areYou === 'Other' && (
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>What kind of work do you do?</Text>
                    <TextInput
                        style={styles.input}
                        value={otherWork}
                        onChangeText={setOtherWork}
                    />
                </View>
            )}

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subtitle}>Your very first vibe</Text>
            <Text style={styles.skip}>Skip For Now</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2ec4b6',
        paddingHorizontal: 24,
        paddingTop: 30,
    },

    backBtn: {
        marginBottom: 8,
        top: -5,
    },

    header: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
        color: '#000000',
        fontFamily: 'Poppins',
    },

    label: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
        color: '#000000',
        fontFamily: 'Poppins',
    },

    Sublabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        fontFamily: 'Poppins',
        left: 2,
    },

    subLabel: {
        fontSize: 12,
        fontWeight: '400',
        color: '#000000',
        fontFamily: 'Poppins',
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    optionBox: {
        width: 160,
        height: 58,
        backgroundColor: '#fff',
        paddingVertical: 14,
        marginBottom: 12,
        borderRadius: 10,
        alignItems: 'center',
        borderWidth: 0.25,
        borderColor: '#FFFFFF',
    },

    optionBoxHorizontal: {
        backgroundColor: '#fff',
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginRight: 10,
        borderRadius: 8,
        alignItems: 'center',
        width: 108,
        height: 56,
        right: 5,
    },

    selectedBox: {
        backgroundColor: '#2E3A3F',
        borderColor: '#fff',
    },

    optionText: {
        fontSize: 14,
        color: '#000000',
        fontWeight: '400',
        fontFamily: 'Poppins',
        top: 4,
    },

    inputContainer: {
        marginBottom: 17,
        top: -5
    },

    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 4,
        color: '#000000',
        fontFamily: 'Poppins',
        marginBottom: 15

    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        fontSize: 14,
        fontFamily: 'Poppins',
    },

    continueButton: {
        backgroundColor: '#2E3A3F',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 5,
        width: 194,
        height: 56,
        justifyContent: 'center',
        borderWidth: 0.25,
        borderColor: '#FFFFFF',
    },

    continueText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Poppins',
    },

    subtitle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 12,
        color: '#000000',
        fontWeight: '400',
        fontFamily: 'Poppins',
    },

    skip: {
        textAlign: 'center',
        marginTop: 8,
        fontWeight: '500',
        fontSize: 16,
        color: '#000000',
        fontFamily: 'Poppins',
    },

});
