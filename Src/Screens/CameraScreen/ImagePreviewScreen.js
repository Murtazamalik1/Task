import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Entypo";
import BottomNavigation from "../../Navigation/BottomNavigation"; 

const ImagePreviewScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const image = route.params?.image;

    return (
        <View style={styles.container}>
            {/* Back Arrow */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={28} color="#000" />
            </TouchableOpacity>

            {/* Previewed Image */}
            {image && (
                <Image
                    source={{ uri: image.uri }}
                    style={styles.previewImage}
                    resizeMode="cover"
                />
            )}

            {/* Crop, Save, Share buttons */}
            <View style={styles.actionsRow}>
                <TouchableOpacity style={styles.action}>
                    <Icon name="scissors" size={18} color="#000" />
                    <Text style={styles.actionText}>Crop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Icon name="save" size={18} color="#000" />
                    <Text style={styles.actionText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.action}>
                    <Icon name="share" size={18} color="#000" />
                    <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
            </View>

            {/* Bottom Navigation Tabs */}
            <BottomNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },

    backButton: {
        position: "absolute",
        top: 40,
        left: 20,
        zIndex: 10,
    },

    previewImage: {
        flex: 1,
        width: "100%",
    },

    actionsRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 15,
        backgroundColor: "#fff",
        borderTopColor: "#ccc",
        borderTopWidth: 0.3,
        top: -60
    },

    action: {
        alignItems: "center",
    },

    actionText: {
        fontSize: 14,
        marginTop: 4,
        color: "#000",
        fontWeight: "500",
    },
});

export default ImagePreviewScreen;
