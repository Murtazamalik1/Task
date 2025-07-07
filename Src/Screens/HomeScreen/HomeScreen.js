import React from "react";
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import BottomNavigation from "../../Navigation/BottomNavigation";

const localImages = {
    img1: require("../../assets/Image/image1.jpg"),
    img2: require("../../assets/Image/image2.png"),
    img3: require("../../assets/Image/image3.jpg"),
    img4: require("../../assets/Image/image4.png"),
    img5: require("../../assets/Image/image5.jpg"),
    img6: require("../../assets/Image/image6.jpg"),
};

const HomeScreen = () => {
    const feelingsData = [
        {
            date: "July 07, 2025",
            location: "Metro Manila, Philippines",
            moodImage: require("../../assets/Image/Header/Happy.png"),
            moodLabel: "Happy",
            description:
                "You spent time outdoors — surrounded by trees, sunlight, and the quiet rhythm of the city.",
            images: [localImages.img1, localImages.img2, localImages.img3, localImages.img4, localImages.img5, localImages.img6],
            bestMomentIndex: 2,
        },
        {
            date: "July 08, 2025",
            location: "Bataan, Philippines",
            moodImage: require("../../assets/Image/Header/Romantic.png"),
            moodLabel: "Romantic",
            description:
                "You watched the sunset on the beach — warm breeze, crashing waves, and the perfect company.",
            images: [localImages.img3, localImages.img1, localImages.img5, localImages.img6],
            bestMomentIndex: 1,
        },
        {
            date: "July 09, 2025",
            location: "Laguna, Philippines",
            moodImage: require("../../assets/Image/Header/sad.gif"),
            moodLabel: "Sad",
            description:
                "It was a quiet day. You spent time alone reflecting, journaling, and letting yourself feel.",
            images: [localImages.img2, localImages.img4, localImages.img6],
            bestMomentIndex: 0,
        },
        {
            date: "July 10, 2025",
            location: "Cebu City, Philippines",
            moodImage: require("../../assets/Image/Header/Neutral.png"),
            moodLabel: "Neutral",
            description:
                "Today was calm. A normal day at work, some coffee, and a walk through the park in the evening.",
            images: [localImages.img4, localImages.img5, localImages.img1, localImages.img2],
            bestMomentIndex: 3,
        },
        {
            date: "July 11, 2025",
            location: "Davao City, Philippines",
            moodImage: require("../../assets/Image/Header/Happy.png"),
            moodLabel: "Excited",
            description:
                "You explored a new city, tried local food, met strangers who felt like friends, and laughed a lot.",
            images: [localImages.img6, localImages.img3, localImages.img2, localImages.img5],
            bestMomentIndex: 1,
        },
    ];

    const MoodSelector = () => {
        const moods = [
            { label: "Happy", image: require("../../assets/Image/Header/Happy.png") },
            { label: "Romantic", image: require("../../assets/Image/Header/Romantic.png") },
            { label: "Sad", image: require("../../assets/Image/Header/sad.gif"), isSad: true },
            { label: "Neutral", image: require("../../assets/Image/Header/Neutral.png") },
            { label: "Excited", image: require("../../assets/Image/Header/Happy.png") },
        ];

        return (
            <View style={styles.moodRow}>
                {moods.map((mood, idx) => (
                    <TouchableOpacity
                        key={idx}
                        style={[styles.moodItem, mood.isSad && styles.sadMoodItem]}
                    >
                        <Image
                            source={mood.image}
                            style={[styles.moodImage, mood.isSad && styles.sadMoodImage]}
                        />
                        <Text style={[styles.moodLabel, mood.isSad && styles.sadMoodLabel]}>
                            {mood.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const renderImages = (images, bestMomentIndex) =>
        images.map((img, idx) => (
            <View key={idx} style={styles.imageWrapper}>
                <Image source={img} style={styles.momentImage} />
                {idx === bestMomentIndex && (
                    <View style={styles.bestMoment}>
                        <Text style={styles.bestText}>Best Moment Of The Day</Text>
                    </View>
                )}
            </View>
        ));

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                {/* Header */}
                <View style={styles.headerContainer}>
                    <View style={styles.topHeader}>
                        <View style={styles.leftSide}>
                            <Image
                                source={require("../../assets/Logo/Logo.png")}
                                style={styles.logo}
                            />
                            <Text style={styles.appName}>OkaBoka</Text>
                        </View>
                        <View style={styles.rightSide}>
                            <Image
                                source={require("../../assets/Image/bellIcon.gif")}
                                style={styles.bellImage}
                            />
                            <Image
                                source={require("../../assets/Image/Profile.png")}
                                style={styles.profileImage}
                            />
                        </View>
                    </View>

                    {/* White Separator */}
                    <View style={styles.separator} />

                    {/* Arrow Row with Centered Title */}
                    <View style={styles.arrowHeaderRow}>
                        <TouchableOpacity style={styles.arrowleft}>
                            <Icon name="chevron-left" size={22} color="#000000" />
                        </TouchableOpacity>

                        <View style={styles.titleWrapper}>
                            <Text style={styles.mainTitle}>How I’m Feeling Right Now</Text>
                        </View>

                        <TouchableOpacity style={styles.arrowButton}>
                            <Icon name="chevron-right" size={22} color="#000000" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Mood Selector */}
                <MoodSelector />

                {/* Feelings Cards */}
                {feelingsData.map((item, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.date}>{item.date}</Text>
                        <View style={styles.locationRow}>
                            <Icon name="location-pin" size={16} color="red" />
                            <Text style={styles.locationText}>{item.location}</Text>
                        </View>
                        <View style={styles.centeredMood}>
                            <Image source={item.moodImage} style={styles.emojiImage} />
                            <Text style={styles.feelingTag}>Feeling of the Day</Text>
                        </View>
                        <View style={styles.blackSeparator} />
                        <Text style={styles.description}>{item.description}</Text>
                        <View style={styles.imageGrid}>
                            {renderImages(item.images, item.bestMomentIndex)}
                        </View>
                        <Text style={styles.more}>
                            ▼ {item.images.length - 3 > 0 ? item.images.length - 3 : 0} More Moments
                        </Text>
                    </View>
                ))}
            </ScrollView>

            {/* Bottom Navigation */}
            <BottomNavigation />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    headerContainer: {
        backgroundColor: "#3DC4AB",
        paddingTop: 20,
        paddingBottom: 16,
        paddingHorizontal: 16,
        width: "100%",
        height: 199,
    },
    topHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    leftSide: {
        flexDirection: "row",
        alignItems: "center",
        left: 8,
    },
    logo: {
        width: 48,
        height: 48,
    },
    appName: {
        marginLeft: 10,
        fontSize: 24,
        fontWeight: "700",
        color: "#000000",
        fontFamily: "Poppins",
    },
    rightSide: {
        flexDirection: "row",
        alignItems: "center",
        right: 25,
    },
    bellImage: {
        width: 22,
        height: 22,
        marginRight: 12,
        resizeMode: "contain",
    },
    profileImage: {
        width: 48,
        height: 48,
        borderRadius: 16,
    },

    separator: {
        height: 1,
        backgroundColor: "#fff",
        marginVertical: 10,
    },
    arrowHeaderRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: 4,
        position: "relative",
    },

    titleWrapper: {
        position: "absolute",
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: -1,
    },

    mainTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000000",
        textAlign: "center",
    },

    arrowButton: {
        top: 70,
        left: 20
    },

    arrowleft: {
        top: 70,
        right: 20
    },

    moodRow: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#2fc4b2",
        paddingVertical: 10,
    },

    moodItem: {
        alignItems: "center",
        padding: 10
    },

    moodImage: {
        width: 48,
        height: 48,
        resizeMode: "contain",
        marginBottom: 4,
    },
    moodLabel: {
        fontSize: 12,
        color: "#000",
    },
    sadMoodImage: { width: 70, height: 70, top: -70 },
    sadMoodLabel: { fontWeight: "600", fontSize: 13, top: -70 },
    emojiImage: { width: 24, height: 24, resizeMode: "contain", marginBottom: 4 },
    card: {
        backgroundColor: "#FFFFFF",
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 0.25,
        borderColor: "#00000033",
        top: 10,
        elevation: 4,
    },
    date: {
        fontWeight: "600",
        fontSize: 12,
        color: "#000000",
        marginBottom: 6,
        fontFamily: "Poppins",
    },
    centeredMood: {
        alignItems: "center",
        top: -35,
    },
    feelingTag: {
        fontSize: 5,
        color: "#000000",
        fontWeight: "300",
        fontFamily: "Poppins",
    },

    blackSeparator: {
        height: 1,
        backgroundColor: "#000",
        marginVertical: 6,
        top: -30,
    },

    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        right: 5,
    },
    locationText: {
        fontSize: 10,
        color: "#000000",
        fontWeight: "400",
        fontFamily: "Poppins",
    },
    description: {
        fontSize: 10,
        marginVertical: 5,
        textAlign: "center",
        color: "#000000",
        fontFamily: "Poppins",
        fontWeight: "400",
        top: -20,
    },
    imageGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    imageWrapper: {
        width: "31%",
        height: 100,
        marginBottom: 6,
        borderRadius: 8,
        overflow: "hidden",
        position: "relative",
    },
    momentImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    bestMoment: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000000a0",
        width: "100%",
        padding: 2,
    },
    bestText: {
        color: "#fff",
        fontSize: 10,
        textAlign: "center",
    },
    more: {
        textAlign: "center",
        color: "#999",
        fontSize: 12,
        marginTop: 5,
    },
});

export default HomeScreen;
