import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
    Linking,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

// Get screen width for dynamic calculations
const { width } = Dimensions.get("window");

const locations = [
    {
        name: "संत तुकाविप्र समाधी देवस्थान",
        address: "मू पोस्ट अंजनवती ता. जी बीड",
        map: "https://maps.app.goo.gl/wUZbMbZXKxRmP8eU8",
        img: require("../images/anajanvati.jpg"),
    },
    {
        name: "श्री विप्र दत्त मंदिर पंढरपूर",
        address: "विप्र दत्त घाट, चौफळा, पंढरपूर, जिल्हा सोलापूर",
        map: "https://maps.app.goo.gl/vLKKJs1zfhcqVkgHA",
        img: require("../images/pandharpur.jpg"),
    },
    {
        name: "श्री संत तुका विप्र स्थापित श्री विठ्ठल मंदिर, बोरबन",
        address: "बोरबन, नांदगाव, जिल्हा सातारा",
        map: "https://maps.app.goo.gl/z396VnzqNpJF94sD6?g_st=aw",
        img: require("../images/borban.jpg"),
    },
    {
        name: "श्री संत तुका विप्र स्थापित श्री विठ्ठल मंदिर, ब्रह्मपुरी",
        address: "ब्रह्मपुरी रोड, ता. राहिमातपूर, कोरेगाव, जिल्हा सातारा",
        map: "https://maps.app.goo.gl/abAuiF2qe6nvNB3G7",
        img: require("../images/bramhapuri.jpg"),
    },
];

const Sampark = () => {
    const openURL = (url) => Linking.openURL(url);

    return (
        <LinearGradient colors={["#FFF7E6", "#FFECC2"]} style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.card}>
                    {/* flexWrap ensures icons wrap to next line on very small screens */}
                    <View style={styles.iconContainer}>
                        {[
                            { url: "https://www.facebook.com/share/1BcsG9mQLK/", icon: require("../images/facebook.png") },
                            { url: "https://wa.me/919619484035", icon: require("../images/whatsapp.jpg") },
                            { url: "tel:+919619484035", icon: require("../images/call.png") },
                            { url: "mailto:info@tukavipra.org", icon: require("../images/gmail.png") },
                            { url: "https://www.youtube.com/@sainttukavipra6147", icon: require("../images/youtube.png") }
                        ].map((social, index) => (
                            <TouchableOpacity key={index} onPress={() => openURL(social.url)} style={styles.iconWrapper}>
                                <Image source={social.icon} style={styles.icon} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <Text style={styles.header}>📍 देवस्थान ठिकाणे</Text>

                {locations.map((item, idx) => (
                    <View key={idx} style={styles.locationCard}>
                        <Image source={item.img} style={styles.locationImg} resizeMode="cover" />
                        <View style={styles.textPadding}>
                            <Text style={styles.locationName}>{item.name}</Text>
                            {item.address && <Text style={styles.address}>{item.address}</Text>}
                            <TouchableOpacity style={styles.mapBtn} onPress={() => openURL(item.map)}>
                                <Text style={styles.mapBtnText}>📍 नकाशा उघडा</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <TouchableOpacity style={styles.footer} onPress={() => openURL("https://kkteam.in")}>
                <Text style={styles.footerText}>Designed & Developed by KK Team</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    scrollContent: { paddingHorizontal: width * 0.04, paddingBottom: 20 }, // Responsive horizontal padding
    card: {
        backgroundColor: "#fff",
        paddingVertical: 20,
        borderRadius: 15,
        elevation: 4,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    header: {
        fontSize: width > 400 ? 22 : 18, // Responsive font size
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 15,
        color: "#b85c00"
    },
    iconContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly", // Distributes icons evenly regardless of screen width
        alignItems: "center"
    },
    iconWrapper: {
        padding: 5,
    },
    icon: {
        width: width * 0.11, // Icon size scales with screen width (approx 11% of width)
        height: width * 0.11,
        borderRadius: 8
    },
    locationCard: {
        backgroundColor: "#fff",
        borderRadius: 15,
        overflow: "hidden", // Ensures image corners are rounded
        marginBottom: 20,
        elevation: 3
    },
    locationImg: {
        width: "100%",
        height: width * 0.5, // 2:1 Aspect ratio approximately
    },
    textPadding: {
        padding: 15,
    },
    locationName: {
        fontSize: width > 400 ? 18 : 16,
        fontWeight: "bold",
        color: "#a65a00"
    },
    address: {
        fontSize: 14,
        color: "#555",
        marginTop: 6,
        lineHeight: 20
    },
    mapBtn: {
        marginTop: 15,
        backgroundColor: "#ff9800",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center"
    },
    mapBtnText: { color: "#fff", fontSize: 16, fontWeight: "700" },
    footer: {
        padding: 15,
        backgroundColor: "#000",
        alignItems: "center"
    },
    footerText: { color: "#fff", fontSize: 12, fontWeight: "600" },
});

export default Sampark;