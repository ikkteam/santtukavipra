import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    'संत आण्णा अनंत उपाध्ये',
    'संत एकनाथ',
    'संत तुकाराम',
    'सद्गुरू शंकराचार्य',
    'विठ्ठल महाराज चातुर्मासे',
    'संत ज्योतिपंत',
    'संत कासीराज - कराड',
    'कोकणातील संत कृष्ण भट',
    'संत दादा खंडभट',
    'सर्व संत - चोखामेळा, नरहरी सोनार, गोरा कुंभार, सावता माळी, मीराबाई, मुक्ताबाई, बंका, राका बांका, सजन कसाई',
    'भक्त पुंडलीक',
    'संत छैया महाराज - पैठण',
    'संत पुरंधर, संत रामचंद्र, संत चांद बोधले, संत दामाजी',
    'संत जोतीपंत',
    'संत महादेव - संत तुकाराम देहुकर यांचे पंतू',
    'संत दादा दैठणे',
    'संत दामाजी',
    'संत द्वैपायन - माशाळ',
    'भक्त धरणीधर - चिंचवड',
    'संत धना जाट',
    'संत नामदेव',
    'संत नामदेव कालीन संत',
    'संत नरसी मेहता',
    'संत निवृत्ती नाथ',
    'संत भानुदास आणि इतर संत',
    'संत गोपाळनाथ - कराड',
    'संत लिळा विश्वंभर आणि इतर संत',
    'सद्गुरू रंगनाथ स्वामी निगडीकर',
    'संत भीमराज - कल्याण मठ डोमगांव',
    'संत पांडुबाबा आयचित',
    'संत कबीर, संत सजना कसाब, संत महमद शेख, गुरु नानक',
    'संत विठोबा चातुर्मासे',
    'संत बाबा मुदगल',
    'संत कवि श्रीरंग',
    'संत बाबादेव - बीड, संत मनसाराम - सातारा, संत रामनाथ - आटपाडी',
    'संत बाबा शिवदिन - पैठण, संत सदानंद - सासवड, संत बाबा गोसावी - इंदापूर',
    'संत बाबा राघोपंत - पंढरपूर',
    'समस्त बडवे - पंढरपूर',
    'संत बोधले महाराज',
    'संत बहिरा पिसा, संत नागा, संत दामाजी, संत विसोबा खेचर, संत मालोपंत, संत नरहरी',
    'संत चोखा',
    'संत कसाब',
    'भक्त मीरा',
    'संत भीऊ माळी - केमी',
    'भक्त मंगळमूर्ती आणि सिद्धीबाई',
    'एकनाथ सांप्रदाई संत शिवराम, संत मुकुंद, संत गोडसे शिवराम',
    'संत रोहिदास',
    'संत चरित्रकार - कवी महीपती',
    'संत रुद्राई महाराज, संत रामनाथ मनसाराम',
    'संत रामलिंग आणि संत सुजात, संत भजलींग आणि संत सुलतान',
    'संत लक्ष्मण - चाफळ',
    'संत भिऊबा',
    'संत वानखंडी',
    'संत कवि शिवराम - पांच पिंपळे',
    'संत गोपाल केशव, संत मैलगीरी अण्णा, संत महादेव',
    'संत कवि शिवराव, संत नारायण कवि, संत अनंत वैष्णव',
    'संत शांतलिंग महाराज - विजोरा',
    'कवी श्रीधर यांचा पुत्र मनोहर',
    'सर्व संत - ज्ञानदेव, एकनाथ, सोपान',
    'संत बाबा भोज - धामनगांव',
    'संत अवधूत बाबा रोपळेकर - एकनाथ वंशीय',
    'संत संतोबा पवार, संत माणकोजी बोधले',
    'संत शंकर बाबा',
    'संत ज्ञानेश्वर',
    'संत गोविंद भट',
    'संत भाई भट',
    'संत सेना महाराज',
    'सर्व संत - ज्ञानेश्वर, मुक्ताबाई, निवृत्ती, सोपान, जनार्दन पंत, एकनाथ'
];

const Itarabhang = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate(item)}>
            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </LinearGradient>
    );
};

export default Itarabhang;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    button: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        paddingVertical: 18,
        paddingHorizontal: 15,
        marginBottom: 12,
    },
    buttonText: {
        fontFamily: 'VesperLibre-Bold',
        fontSize: 18,
        lineHeight: 24,
        textAlign: 'center',
        color: '#3a2b1e'
    }
});
