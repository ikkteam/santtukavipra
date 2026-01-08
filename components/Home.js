import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const BUTTON_COLORS = ['#FF512F', '#F09819'];

const buttonGroups = [
    [{ title: 'गुरु परंपरा', route: 'गुरु परंपरा', fullWidth: true }],

    [
        { title: 'थोडक्यात चरित्र', route: 'थोडक्यात चरित्र' },
        { title: 'संत तुकाविप्र अभंग', route: 'संत तुकाविप्र अभंग' },
    ],
    [
        { title: 'हस्ताक्षर व त्याचे वैशिष्टे', route: 'हस्ताक्षर व त्याचे वैशिष्टे' },
        { title: 'संत तुकाविप्र रचित तत्वमसी ग्रंथातील अभंग', route: 'संत तुकाविप्र रचित तत्वमसी ग्रंथातील अभंग' },
    ],
    [
        { title: 'अभंग रचनेचे वैशिष्टे', route: 'अभंग रचनेचे वैशिष्टे' },
        { title: 'अष्टक पठन ऑडिओ', route: 'अष्टक पठन ऑडिओ' },
    ],
    [
        { title: 'संत तुकाविप्र रचित साहित्य', route: 'संत तुकाविप्र रचित साहित्य' },
        { title: 'संत तुकाविप्र रचित ज्ञानेश्वर चरित्र', route: 'संत तुकाविप्र रचित ज्ञानेश्वर चरित्र' },
    ],
    [
        { title: 'संस्थान/तीर्थक्षेत्र', route: 'संस्थान/तीर्थक्षेत्र' },
        { title: 'सर्व संतांचे साहित्य', route: 'सर्व संतांचे साहित्य' },
    ],
    [
        { title: 'संत तुकाविप्र रचित आरत्या', route: 'संत तुकाविप्र रचित आरत्या' },
        { title: 'संत साहित्य व समाज कार्य', route: 'संत साहित्य व समाज कार्य' },
    ],
    [
        { title: 'संतकवी राजाराम प्रासादी कृत संत तुकाविप्र चरित्र', route: 'संतकवी राजाराम प्रासादी कृत संत तुकाविप्र चरित्र' },
        { title: 'संपर्क', route: 'संपर्क' },

    ],
    [{
        title: 'दिंडीत सहभागी होण्यासाठी येथे क्लिक करा',
        isWhatsApp: true,
    },]
];

const GradientButton = ({ title, onPress }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.buttonOuter}>
        <LinearGradient colors={BUTTON_COLORS} style={styles.button}>
            <Text style={styles.btnText}>{title}</Text>
        </LinearGradient>
    </TouchableOpacity>
);

const Home = () => {
    const navigation = useNavigation();

    const openWhatsApp = () => {
        const phoneNumber = '919619484035';
        const message = '🌺 राम कृष्ण हरी 🌺 मला दिंडीत सहभागी व्हायचं आहे.';
        const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        Linking.openURL(url).catch(() =>
            alert('WhatsApp is not installed on your device')
        );
    };

    return (
        <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
            <ScrollView>
                <Image
                    style={styles.image}
                    source={require('../images/tukavipra.jpg')}
                />

                <View style={styles.buttonWrapper}>
                    {buttonGroups.map((group, groupIndex) => (
                        <View
                            key={groupIndex}
                            style={[
                                group[0]?.fullWidth ? styles.fullWidthButton : styles.buttonRow,
                            ]}
                        >
                            {group.map((btn, i) => {
                                const onPress = btn.isWhatsApp
                                    ? openWhatsApp
                                    : () => navigation.navigate(btn.route);
                                return (
                                    <GradientButton
                                        key={i}
                                        title={btn.title}
                                        onPress={onPress}
                                    />
                                );
                            })}
                        </View>
                    ))}
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingTop: 10,
    },
    image: {
        height: 220,
        width: '100%',
        resizeMode: 'contain',
        marginVertical: -10,
    },
    buttonWrapper: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    fullWidthButton: {
        width: '100%',
        marginTop: 25,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch', // 👈 ensures both buttons get same height
        marginVertical: 8,
        gap: 10,
    },

    buttonOuter: {
        flex: 1, // 👈 evenly share available width
    },

    button: {
        flex: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        paddingHorizontal: 10,
        paddingVertical: 8,
        minHeight: 60,
    },
    btnText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        flexWrap: 'wrap',
        fontFamily: 'VesperLibre-Bold',
    },
});
