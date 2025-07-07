import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation, useRoute } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const BottomNavigation = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const isPreviewScreen = route.name === "ImagePreview";

    return (
        <View style={styles.container}>
            {/* Hide plus icon in preview */}
            {!isPreviewScreen && (
                <View style={styles.floatingIconContainer}>
                    <TouchableOpacity
                        style={styles.photoButton}
                        onPress={() => navigation.navigate("Camera")}
                    >
                        <Icon name="plus" size={24} color="#fff" />
                    </TouchableOpacity>
                </View>
            )}

            {/* Bottom Tab Bar */}
            <View style={styles.tabBar}>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.activeText}>Oka (You)</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("Relationship")}>
                    <Text style={styles.inactiveText}>Bond</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tab} onPress={() => navigation.navigate("About")}>
                    <Text style={styles.inactiveText}>Oka’s</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    floatingIconContainer: {
        position: "absolute",
        top: -60,
        zIndex: 10,
    },
    photoButton: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#2CC4B4",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#000000",
    },
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: 430,
        height: 56,
        backgroundColor: "#3DC4AB",
        paddingVertical: 12,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    tab: {
        flex: 1,
        alignItems: "center",
        top: 5,
    },
    activeText: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 14,
    },
    inactiveText: {
        color: "#000",
        fontSize: 14,
    },
});

export default BottomNavigation;
