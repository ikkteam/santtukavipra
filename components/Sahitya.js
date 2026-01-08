import React from 'react';
import { Text, TouchableOpacity, StyleSheet, FlatList, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  { title: 'संत ज्ञानेश्वर', url: 'https://www.santsahitya.in/dnyaneshwar-maharaj/' },
  { title: 'संत तुकाराम', url: 'https://www.santsahitya.in/tukaram-maharaj/' },
  { title: 'संत नामदेव', url: 'https://www.santsahitya.in/namdev/' },
  { title: 'संत एकनाथ', url: 'https://www.santsahitya.in/eknath-maharaj/' },
  { title: 'संत तुकडोजी', url: 'https://www.santsahitya.in/sant-tukdoji/' },
  { title: 'संत सावता माळी', url: 'https://www.santsahitya.in/savatamali/' },
  { title: 'संत मुक्ताबाई', url: 'https://www.santsahitya.in/muktabai/' },
  { title: 'संत जनाबाई', url: 'https://www.santsahitya.in/janabai/' },
  { title: 'संत बहिणाबाई', url: 'https://www.santsahitya.in/bahinabai-pathak/' },
  { title: 'संत निवृत्तीनाथ', url: 'https://www.santsahitya.in/nivruttinath-maharaj/' },
  { title: 'संत सोपनदेव', url: 'https://www.santsahitya.in/abhang-gatha/sant-sopandev-abhang/' },
  { title: 'संत चोखामेळा', url: 'https://www.santsahitya.in/chokhoba/' },
  { title: 'संत जनार्दन', url: 'https://www.santsahitya.in/sant-janardan/' },
  { title: 'संत भानुदास', url: 'https://www.santsahitya.in/bhanudas/' },
  { title: 'राष्ट्रसंत जनार्दन', url: 'https://www.santsahitya.in/mahati-santanchi/janardan-swami-maungiri/#google_vignette' },
  { title: 'संत निळोबा', url: 'https://www.santsahitya.in/abhang-gatha/nilobarai-gatha/' },
  { title: 'संत संताजी', url: 'https://www.santsahitya.in/santaji-maharaj/' },
  { title: 'संत सेना', url: 'https://www.santsahitya.in/sant-sena/' },
  { title: 'संत गोरोबा', url: 'https://www.santsahitya.in/abhang-gatha/gora-kumbhar-abhang/' },
  { title: 'संत रामदास', url: 'https://www.santsahitya.in/samarth-ramdas/' },
  { title: 'संत नरहरी', url: 'https://www.santsahitya.in/narhari-sonar/' },
  { title: 'संत मानकोजी', url: 'https://www.santsahitya.in/mankoji-bhodhale/' },
  { title: 'संत महंमद', url: 'https://www.santsahitya.in/abhang-gatha/shaikh-mohammad-abhang/' },
  { title: 'संत जोगा', url: 'https://www.santsahitya.in/jogaa-parmanand/' },
  { title: 'संत जगमित्र', url: 'https://www.santsahitya.in/jagmitra-nagaa/' },
  { title: 'संत राका', url: 'https://www.santsahitya.in/mahati-santanchi/raka-kumbhar/' },
  { title: 'संत परीसा', url: 'https://www.santsahitya.in/parisa-bhagwat/' },
  { title: 'संत कान्हो', url: 'https://www.santsahitya.in/kanho-pathak/' },
  { title: 'संत कान्होबा', url: 'https://www.santsahitya.in/kanhob-rai/' },
  { title: 'संत कान्होपात्रा', url: 'https://www.santsahitya.in/kanhopatra/' },
  { title: 'संत भागुबाई', url: 'https://www.santsahitya.in/abhang-gatha/sant-bhagubai-abhang/' },
  { title: 'संत सोयराबाई', url: 'https://www.santsahitya.in/soyrabai/' },
  { title: 'संत वेणाबाई', url: 'https://www.santsahitya.in/venabai/' },
  { title: 'संत मीराबाई', url: 'https://www.santsahitya.in/meerabai/' },
  { title: 'संत निर्मळा', url: 'https://www.santsahitya.in/nirmala/' },
  { title: 'संत बंका', url: 'https://www.santsahitya.in/banka/' },
  { title: 'संत सखू', url: 'https://www.santsahitya.in/mahati-santanchi/sant-sakhu/' },
  { title: 'संत महंदबा', url: 'https://www.santsahitya.in/mahati-santanchi/mahadamba/' },
  { title: 'संत कर्ममेळा', url: 'https://www.santsahitya.in/karmamela/' },
  { title: 'संत दामाजी', url: 'https://www.santsahitya.in/damaji-pant/' },
  { title: 'संत गाडगेबाबा', url: 'https://www.santsahitya.in/gadgebaba/' },
  { title: 'संत भागवानबाबा', url: 'https://www.santsahitya.in/bhagvan-baba/' },
  { title: 'संत वामनभाऊ', url: 'https://www.santsahitya.in/mahati-santanchi/sant-wamanbhau-maharaj/' },
  { title: 'संत गुलाबराव', url: 'https://www.santsahitya.in/gulabrao/' },
  { title: 'संत अमृतराय', url: 'https://www.santsahitya.in/mahati-santanchi/sant-amrutrai/' },
  { title: 'संत महिपती', url: 'https://www.santsahitya.in/mahipati/' },
  { title: 'संत सेवालाल', url: 'https://www.santsahitya.in/sevalal-maharaj/' },
  { title: 'संत तुकाविप्र', url: 'https://www.santsahitya.in/tukawipra/' },
  { title: 'संत चांगदेव', url: 'https://www.santsahitya.in/mahati-santanchi/changdev/' },
  { title: 'संत विसोबा', url: 'https://www.santsahitya.in/visoba/' },
  { title: 'संत बसवेश्वर', url: 'https://www.santsahitya.in/basweshar-maharaj/' },
  { title: 'संत काशिबा', url: 'https://www.santsahitya.in/mahati-santanchi/sant-kashiba-maharaj/' },
  { title: 'संत रोहिदास', url: 'https://www.santsahitya.in/rohidas/' },
  { title: 'संत कबीर', url: 'https://www.santsahitya.in/sant-kabir-das/' },
  { title: 'संत नरसी', url: 'https://www.santsahitya.in/narsi-mehta/' },
  { title: 'संत लतीफ', url: 'https://www.santsahitya.in/mahati-santanchi/shah-abdul-latif/' },
  { title: 'संत केशवदास', url: 'https://www.santsahitya.in/mahati-santanchi/sant-keshavdas/' },
];

const Sahitya = () => {
  const handlePress = (url) => Linking.openURL(url);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handlePress(item.url)} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#FFF7E6', '#FFECC2']} style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </LinearGradient>
  );
};

export default Sahitya;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    fontFamily: 'VesperLibre-Bold',
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
    color: '#3a2b1e'
  },
});
