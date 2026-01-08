import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const aratiList = [
    'धुंडीराज - गणपती',
    'कृष्णाकाठचा विठ्ठल',
    'पंढरीचा विठ्ठल',
    'रुक्मिणीची आरती',
    'आरती दत्ताची',
    'आरती ब्रम्हपुरी येथील विठ्ठल रुक्मिणीची',
    'कृष्णा नदीची आरती',
    'सद्गुरू पूजेची आरती',
    'कामधेनूची आरती',
    'गुरु परंपरेची आरती',
    'कीर्तनाची आरती',
    'खग स्थंबाची आरती',
    'रंगसाळेची आरती',
    'रामदास स्वामींची आरती',
    'विश्वाच्या मातेची आरती',
    'विटेवरच्या केशवाची आरती',
    'महर्षि व्यास मुनींची आरती',
    'संत तुकाविप्र यांचे गुरु विप्रनाथ स्वामी यांची आरती',
    'संत पंगतीची आरती',
    'चार वेदांची आरती',
    'भूदेवाची आरती',
    'मुळपीठाची आरती',
    'आरती संत सणकादीक (नाथ कृत)'
];

const Arati = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate(item)}
        >
            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
            <FlatList
                data={aratiList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </LinearGradient>
    );
};

export default Arati;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    button: {
        backgroundColor: "#fff",
        paddingVertical: 18,
        paddingHorizontal: 15,
        borderRadius: 12,
        marginBottom: 12,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    buttonText: {
        fontFamily: 'VesperLibre-Bold',
        fontSize: 20,
        textAlign: 'center',
        color: '#3a2b1e',
    },
});