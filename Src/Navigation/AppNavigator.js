import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen/SplashScreen';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import VerificationScreen from '../Screens/VerificationScreen/VerificationScreen';
import Profile from '../Screens/ProfileScreen/ProfileScreen';
import AboutScreen from '../Screens/AboutScreen/AboutScreen';
import OtherScreen from '../Screens/AboutScreen/OtherScreen';
import RelationShipScreen from '../Screens/RelationShipScreen/RelationShipScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import CameraScreen from '../Screens/CameraScreen/CameraScreen';
import ImagePreviewScreen from '../Screens/CameraScreen/ImagePreviewScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="SinUp" component={SignUpScreen} />
                <Stack.Screen name="Vrify" component={VerificationScreen} />
                <Stack.Screen name='profile' component={Profile} />
                <Stack.Screen name='About' component={AboutScreen} />
                <Stack.Screen name='Other' component={OtherScreen} />
                <Stack.Screen name='Relationship' component={RelationShipScreen} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Camera' component={CameraScreen} />
                <Stack.Screen name='ImagePreview' component={ImagePreviewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
