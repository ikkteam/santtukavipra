import React from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const aratiList = [
    'हरिपाठ १',
    'हरिपाठ २',
    'अभंग गाथा',
    'आळंदी येथे रचलेले अभंग',
    'इतर संतासाठी रचलेले अभंग',
    'अभंग भागवत',
    'हस्ताक्षरात उपलब्ध अभंग',
    'अभंग विडिओ',
    'अभंग निरूपण',
    'गाथा पारायण अभंग'
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
        fontSize: 20,
        textAlign: 'center',
        color: '#3a2b1e'
    },
});