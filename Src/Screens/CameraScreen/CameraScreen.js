import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    PermissionsAndroid,
    Platform,
    Alert,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const CameraScreen = () => {
    const navigation = useNavigation();
    const [previewImage, setPreviewImage] = useState(null);

    const requestCameraPermission = async () => {
        if (Platform.OS === "android") {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: "Camera Permission",
                        message: "App needs access to your camera",
                        buttonNeutral: "Ask Me Later",
                        buttonNegative: "Cancel",
                        buttonPositive: "OK",
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn("Permission error: ", err);
                return false;
            }
        }
        return true;
    };

    const openCamera = async () => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            Alert.alert("Permission Denied", "Camera permission is required.");
            return;
        }

        launchCamera(
            {
                mediaType: "photo",
                saveToPhotos: true,
                includeBase64: false,
            },
            (response) => {
                console.log("Camera response: ", response);

                if (response.didCancel) {
                    console.log("User cancelled camera");
                } else if (response.errorCode) {
                    console.warn("Camera error: ", response.errorMessage);
                    Alert.alert("Camera Error", response.errorMessage || "Something went wrong");
                } else {
                    const image = response.assets?.[0];
                    if (image) {
                        setPreviewImage(image);
                    }
                }
            }
        );
    };

    const openGallery = () => {
        launchImageLibrary({ mediaType: "photo" }, (response) => {
            if (response.didCancel) {
                console.log("User cancelled gallery");
            } else if (response.errorCode) {
                console.warn("Gallery error: ", response.errorMessage);
                Alert.alert("Gallery Error", response.errorMessage || "Something went wrong");
            } else {
                const image = response.assets?.[0];
                if (image) {
                    setPreviewImage(image);
                }
            }
        });
    };

    const goToPreview = () => {
        if (previewImage) {
            navigation.navigate("ImagePreview", { image: previewImage });
        } else {
            Alert.alert("No Image", "Please select or capture an image first.");
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Icon name="chevron-left" size={30} color="#fff" />
            </TouchableOpacity>

            <View style={styles.previewArea}>
                {previewImage ? (
                    <Image
                        source={{ uri: previewImage.uri }}
                        style={{ flex: 1, width: "100%" }}
                        resizeMode="cover"
                    />
                ) : (
                    <Text style={styles.previewText}>Camera Preview</Text>
                )}
            </View>

            <View style={styles.bottomControls}>
                <TouchableOpacity onPress={openGallery}>
                    <Icon name="image" size={28} color="#fff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.captureBtn} onPress={openCamera}>
                    <View style={styles.innerCircle} />
                </TouchableOpacity>

                <TouchableOpacity onPress={goToPreview}>
                    <Icon name="check" size={28} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.modeTabs}>
                {["Text", "Image", "Video"].map((mode) => (
                    <Text key={mode} style={styles.tabText}>{mode}</Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#000" },
    backButton: {
        position: "absolute",
        top: 40,
        left: 20,
        zIndex: 1,
    },
    previewArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    previewText: {
        color: "#888",
        fontSize: 16,
    },
    bottomControls: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#000",
    },
    captureBtn: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    innerCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#fff",
    },
    modeTabs: {
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 16,
        backgroundColor: "#000",
    },
    tabText: {
        color: "#999",
        fontSize: 14,
        marginHorizontal: 20,
    },
});

export default CameraScreen;
