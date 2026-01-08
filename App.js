import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import Home from './components/Home';
import Charitra from './components/Charitra';
import Abhang from './components/Abhang';
import Haripath from './components/Haripath';
import Haripath2 from './components/Haripath2';
import Devasthan from './components/Devasthan';
import Sampark from './components/Sampark';
import Sahitya from './components/Sahitya';
import Arati from './components/Arati';
import Guruparampara from './components/Guruparampara';
import Hastakshar from './components/Hastakshar';
import Tatvmasi from './components/Tatvmasi';
import Rachitsahitya from './components/Rachitsahitya';
import Rachitcharitra from './components/Rachitcharitra';
import Rajaramcharitra from './components/Rajaramcharitra';
import Samajkary from './components/Samajkary';
import Abhanggatha from './components/Abhanggatha';
import Alandiabhang from './components/Alandiabhang';
import Itarabhang from './components/Itarabhang';
import Bhagvatabhang from './components/Bhagvatabhang';
import Hastaksharabhang from './components/Hastaksharabhang';
import Abhangvideo from './components/Abhangvideo';
import Abhangnirupan from './components/Abhangnirupan';
import Abhangparayan from './components/Abhangparayan';
import Abhangrvaishishte from './components/Abhangrvaishishte';
import Ashtakaudio from './components/Ashtakaudio';
import Ganpati_arati from './components/Arati/Ganpati_arati';
import Krushnkathacha_vitthal from './components/Arati/Krushnkathacha_vitthal';
import Pandhricha_vitthal from './components/Arati/Pandhricha_vitthal';
import Rukhmanichi_arati from './components/Arati/Rukhmanichi_arati';
import Dattachi_Arati from './components/Arati/Dattachi_Arati';
import Bramhapuri_arati from './components/Arati/Bramhapuri_arati';
import Krushnanadichi_arati from './components/Arati/Krushnanadichi_arati';
import Sadgurupujechi_arati from './components/Arati/Sadgurupujechi_arati';
import Sankadik_arati from './components/Arati/Sankadik_arati';
import Kamdhenu_arati from './components/Arati/Kamdhenu_arati';
import Guruparampara_arati from './components/Arati/Guruparampara_arati';
import Kirtanachi_arati from './components/Arati/Kirtanachi_arati';
import Khagstambh_arati from './components/Arati/Khagstambh_arati';
import Rangsalechi_arati from './components/Arati/Rangsalechi_arati';
import Ramdasswami_arati from './components/Arati/Ramdasswami_arati';
import Vishvmata_arati from './components/Arati/Vishvmata_arati';
import Keshvachi_arati from './components/Arati/Keshvachi_arati';
import Maharshi_arati from './components/Arati/Maharshi_arati';
import Vipranath_arati from './components/Arati/Vipranath_arati';
import Pangatichi_arati from './components/Arati/Pangatichi_arati';
import Charved_arati from './components/Arati/Charved_arati';
import Bhudevachi_arati from './components/Arati/Bhudevachi_arati';
import Mulpithachi_arati from './components/Arati/Mulpithachi_arati';
import Santeknath from './components/Itarsantancheabhang/Santeknath';
import Santbhaibhat from './components/Itarsantancheabhang/Santbhaibhat';
import Santtukaram from './components/Itarsantancheabhang/Santtukaram';
import Vitthalmaharaj from './components/Itarsantancheabhang/Vitthalmaharaj';
import Santjyotipant from './components/Itarsantancheabhang/Santjyotipant';
import SantKasiraj from './components/Itarsantancheabhang/SantKasiraj';
import KokanSant from './components/Itarsantancheabhang/KokanSant';
import Santdada from './components/Itarsantancheabhang/Santdada';
import Sarvsantchokhamola from './components/Itarsantancheabhang/Sarvsantchokhamola';
import Bhaktpundlik from './components/Itarsantancheabhang/Bhaktpundlik';
import Santchaiiya from './components/Itarsantancheabhang/Santchaiiya';
import Santpurandhar from './components/Itarsantancheabhang/Santpurandhar';
import Santjotipant from './components/Itarsantancheabhang/Santjotipant';
import Santmahadev from './components/Itarsantancheabhang/Santmahadev';
import Santdadadaithane from './components/Itarsantancheabhang/Santdadadaithane';
import Santdamaji from './components/Itarsantancheabhang/Santdamaji';
import Santdvepayan from './components/Itarsantancheabhang/Santdvepayan';
import Bhaktdharnidhar from './components/Itarsantancheabhang/Bhaktdharnidhar';
import Santdhana from './components/Itarsantancheabhang/Santdhana';
import Santnamdev from './components/Itarsantancheabhang/Santnamdev';
import Santnamdevkalin from './components/Itarsantancheabhang/Santnamdevkalin';
import Santnarasi from './components/Itarsantancheabhang/Santnarasi';
import Santnivruttinath from './components/Itarsantancheabhang/Santnivruttinath';
import Santbhanudas from './components/Itarsantancheabhang/Santbhanudas';
import Santgopal from './components/Itarsantancheabhang/Santgopal';
import Santlila from './components/Itarsantancheabhang/Santlila';
import Sadgururangnath from './components/Itarsantancheabhang/Sadgururangnath';
import Santbhimraj from './components/Itarsantancheabhang/Santbhimraj';
import Santpandubaba from './components/Itarsantancheabhang/Santpandubaba';
import Santkabir from './components/Itarsantancheabhang/Santkabir';
import Santvithoba from './components/Itarsantancheabhang/Santvithoba';
import Santbaba from './components/Itarsantancheabhang/Santbaba';
import Santbabadev from './components/Itarsantancheabhang/Santbabadev';
import Santbabashivdin from './components/Itarsantancheabhang/Santbabashivdin';
import Santbabaraghopant from './components/Itarsantancheabhang/Santbabaraghopant';
import Samastbadve from './components/Itarsantancheabhang/Samastbadve';
import SantBahira from './components/Itarsantancheabhang/SantBahira';
import Santchokha from './components/Itarsantancheabhang/Santchokha';
import Santgovind from './components/Itarsantancheabhang/Santgovind';
import Santkasab from './components/Itarsantancheabhang/Santkasab';
import Bhaktmira from './components/Itarsantancheabhang/Bhaktmira';
import Santbhiu from './components/Itarsantancheabhang/Santbhiu';
import Bhaktmanalmurti from './components/Itarsantancheabhang/Bhaktmanalmurti';
import Eknathsamprdai from './components/Itarsantancheabhang/Eknathsamprdai';
import Santrohidas from './components/Itarsantancheabhang/Santrohidas';
import Santcharitrkar from './components/Itarsantancheabhang/Santcharitrkar';
import Santrudrai from './components/Itarsantancheabhang/Santrudrai';
import Santbhiuba from './components/Itarsantancheabhang/Santbhiuba';
import Santshivram from './components/Itarsantancheabhang/Santshivram';
import Santkavishivrav from './components/Itarsantancheabhang/Santkavishivrav';
import Santshantling from './components/Itarsantancheabhang/Santshantling';
import Kavishreedhar from './components/Itarsantancheabhang/Kavishreedhar';
import Santsena from './components/Itarsantancheabhang/Santsena';
import Santdnyandev from './components/Itarsantancheabhang/Santdnyandev';
import Santbababhoj from './components/Itarsantancheabhang/Santbababhoj';
import Santavdhudh from './components/Itarsantancheabhang/Santavdhudh';
import Santsantoba from './components/Itarsantancheabhang/Santsantoba';
import Santshankar from './components/Itarsantancheabhang/Santshankar';
import Santdnyaneshwar from './components/Itarsantancheabhang/Santdnyaneshwar';
import Sarvsantdnyaneshwar from './components/Itarsantancheabhang/Sarvsantdnyaneshwar';
import Santlakshman from './components/Itarsantancheabhang/Santlakshman';
import Santramling from './components/Itarsantancheabhang/Santramling';
import SantBhodhle from './components/Itarsantancheabhang/SantBhodhle';
import Santkavi from './components/Itarsantancheabhang/Santkavi';
import Santvankhandi from './components/Itarsantancheabhang/Santvankhandi';
import Santanna from './components/Itarsantancheabhang/Santanna';
import SadguruS from './components/Itarsantancheabhang/SadguruS';
import Dindi from './components/Dindi';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="संत तुकाविप्र महाराज"
        screenOptions={{
          headerStyle: { backgroundColor: '#f5e1a4' },
          headerTitleAlign: 'center',
          headerTitle: (props) => (
            <Text
              numberOfLines={5}
              style={{
                fontSize: 21,
                flexWrap: 'wrap',
                color: '#8B0000',
                fontWeight: 'bold'
              }}
            >
              {props.children}
            </Text>
          ),
        }}
      >
        <Stack.Screen name="संत तुकाविप्र महाराज" component={Home} />
        <Stack.Screen name="गुरु परंपरा" component={Guruparampara} />
        <Stack.Screen name="थोडक्यात चरित्र" component={Charitra} />
        <Stack.Screen name="संत तुकाविप्र अभंग" component={Abhang} />
        <Stack.Screen name="हस्ताक्षर व त्याचे वैशिष्टे" component={Hastakshar} />
        <Stack.Screen name="संत तुकाविप्र रचित तत्वमसी ग्रंथातील अभंग" component={Tatvmasi} />
        <Stack.Screen name="संत तुकाविप्र रचित साहित्य" component={Rachitsahitya} />
        <Stack.Screen name="संत तुकाविप्र रचित ज्ञानेश्वर चरित्र" component={Rachitcharitra} />
        <Stack.Screen name="संतकवी राजाराम प्रासादी कृत संत तुकाविप्र चरित्र" component={Rajaramcharitra} />
        <Stack.Screen name="अभंग रचनेचे वैशिष्टे" component={Abhangrvaishishte} />
        <Stack.Screen name="अष्टक पठन ऑडिओ" component={Ashtakaudio} />
        <Stack.Screen name="संस्थान/तीर्थक्षेत्र" component={Devasthan} />
        <Stack.Screen name="सर्व संतांचे साहित्य" component={Sahitya} />
        <Stack.Screen name="संत तुकाविप्र रचित आरत्या" component={Arati} />
        <Stack.Screen name="संत साहित्य व समाज कार्य" component={Samajkary} />
        <Stack.Screen name="संपर्क" component={Sampark} />
        <Stack.Screen name="हरिपाठ १" component={Haripath} />
        <Stack.Screen name="हरिपाठ २" component={Haripath2} />
        <Stack.Screen name="अभंग गाथा" component={Abhanggatha} />
        <Stack.Screen name="आळंदी येथे रचलेले अभंग" component={Alandiabhang} />
        <Stack.Screen name="इतर संतासाठी रचलेले अभंग" component={Itarabhang} />
        <Stack.Screen name="अभंग भागवत" component={Bhagvatabhang} />
        <Stack.Screen name="हस्ताक्षरात उपलब्ध अभंग" component={Hastaksharabhang} />
        <Stack.Screen name="अभंग विडिओ" component={Abhangvideo} />
        <Stack.Screen name="अभंग निरूपण" component={Abhangnirupan} />
        <Stack.Screen name="गाथा पारायण अभंग" component={Abhangparayan} />
        <Stack.Screen name="धुंडीराज - गणपती" component={Ganpati_arati} />
        <Stack.Screen name="कृष्णाकाठचा विठ्ठल" component={Krushnkathacha_vitthal} />
        <Stack.Screen name="पंढरीचा विठ्ठल" component={Pandhricha_vitthal} />
        <Stack.Screen name="रुक्मिणीची आरती" component={Rukhmanichi_arati} />
        <Stack.Screen name="आरती दत्ताची" component={Dattachi_Arati} />
        <Stack.Screen name="आरती ब्रम्हपुरी येथील विठ्ठल रुक्मिणीची" component={Bramhapuri_arati} />
        <Stack.Screen name="कृष्णा नदीची आरती" component={Krushnanadichi_arati} />
        <Stack.Screen name="सद्गुरू पूजेची आरती" component={Sadgurupujechi_arati} />
        <Stack.Screen name="आरती संत सणकादीक (नाथ कृत)" component={Sankadik_arati} />
        <Stack.Screen name="कामधेनूची आरती" component={Kamdhenu_arati} />
        <Stack.Screen name="गुरु परंपरेची आरती" component={Guruparampara_arati} />
        <Stack.Screen name="कीर्तनाची आरती" component={Kirtanachi_arati} />
        <Stack.Screen name="खग स्थंबाची आरती" component={Khagstambh_arati} />
        <Stack.Screen name="रंगसाळेची आरती" component={Rangsalechi_arati} />
        <Stack.Screen name="रामदास स्वामींची आरती" component={Ramdasswami_arati} />
        <Stack.Screen name="विश्वाच्या मातेची आरती" component={Vishvmata_arati} />
        <Stack.Screen name="विटेवरच्या केशवाची आरती" component={Keshvachi_arati} />
        <Stack.Screen name="महर्षि व्यास मुनींची आरती" component={Maharshi_arati} />
        <Stack.Screen name="संत तुकाविप्र यांचे गुरु विप्रनाथ स्वामी यांची आरती" component={Vipranath_arati} />
        <Stack.Screen name="संत पंगतीची आरती" component={Pangatichi_arati} />
        <Stack.Screen name="चार वेदांची आरती" component={Charved_arati} />
        <Stack.Screen name="भूदेवाची आरती" component={Bhudevachi_arati} />
        <Stack.Screen name="मुळपीठाची आरती" component={Mulpithachi_arati} />
        <Stack.Screen name="संत आण्णा अनंत उपाध्ये" component={Santanna} />
        <Stack.Screen name="संत एकनाथ" component={Santeknath} />
        <Stack.Screen name="संत तुकाराम" component={Santtukaram} />
        <Stack.Screen name="सद्गुरू शंकराचार्य" component={SadguruS} />
        <Stack.Screen name="विठ्ठल महाराज चातुर्मासे" component={Vitthalmaharaj} />
        <Stack.Screen name="संत ज्योतिपंत" component={Santjyotipant} />
        <Stack.Screen name="संत कासीराज - कराड" component={SantKasiraj} />
        <Stack.Screen name="कोकणातील संत कृष्ण भट" component={KokanSant} />
        <Stack.Screen name="संत दादा खंडभट" component={Santdada} />
        <Stack.Screen name="सर्व संत - चोखामेळा, नरहरी सोनार, गोरा कुंभार, सावता माळी, मीराबाई, मुक्ताबाई, बंका, राका बांका, सजन कसाई" component={Sarvsantchokhamola} />
        <Stack.Screen name="भक्त पुंडलीक" component={Bhaktpundlik} />
        <Stack.Screen name="संत छैया महाराज - पैठण" component={Santchaiiya} />
        <Stack.Screen name="संत पुरंधर, संत रामचंद्र, संत चांद बोधले, संत दामाजी" component={Santpurandhar} />
        <Stack.Screen name="संत जोतीपंत" component={Santjotipant} />
        <Stack.Screen name="संत महादेव - संत तुकाराम देहुकर यांचे पंतू" component={Santmahadev} />
        <Stack.Screen name="संत दादा दैठणे" component={Santdadadaithane} />
        <Stack.Screen name="संत दामाजी" component={Santdamaji} />
        <Stack.Screen name="संत द्वैपायन - माशाळ" component={Santdvepayan} />
        <Stack.Screen name="भक्त धरणीधर - चिंचवड" component={Bhaktdharnidhar} />
        <Stack.Screen name="संत धना जाट" component={Santdhana} />
        <Stack.Screen name="संत नामदेव" component={Santnamdev} />
        <Stack.Screen name="संत नामदेव कालीन संत" component={Santnamdevkalin} />
        <Stack.Screen name="संत नरसी मेहता" component={Santnarasi} />
        <Stack.Screen name="संत निवृत्ती नाथ" component={Santnivruttinath} />
        <Stack.Screen name="संत भानुदास आणि इतर संत" component={Santbhanudas} />
        <Stack.Screen name="संत गोपाळनाथ - कराड" component={Santgopal} />
        <Stack.Screen name="संत लिळा विश्वंभर आणि इतर संत" component={Santlila} />
        <Stack.Screen name="सद्गुरू रंगनाथ स्वामी निगडीकर" component={Sadgururangnath} />
        <Stack.Screen name="संत भीमराज - कल्याण मठ डोमगांव" component={Santbhimraj} />
        <Stack.Screen name="संत पांडुबाबा आयचित" component={Santpandubaba} />
        <Stack.Screen name="संत कबीर, संत सजना कसाब, संत महमद शेख, गुरु नानक" component={Santkabir} />
        <Stack.Screen name="संत विठोबा चातुर्मासे" component={Santvithoba} />
        <Stack.Screen name="संत बाबा मुदगल" component={Santbaba} />
        <Stack.Screen name="संत कवि श्रीरंग" component={Santkavi} />
        <Stack.Screen name="संत बाबादेव - बीड, संत मनसाराम - सातारा, संत रामनाथ - आटपाडी" component={Santbabadev} />
        <Stack.Screen name="संत बाबा शिवदिन - पैठण, संत सदानंद - सासवड, संत बाबा गोसावी - इंदापूर" component={Santbabashivdin} />
        <Stack.Screen name="संत बाबा राघोपंत - पंढरपूर" component={Santbabaraghopant} />
        <Stack.Screen name="समस्त बडवे - पंढरपूर" component={Samastbadve} />
        <Stack.Screen name="संत बोधले महाराज" component={SantBhodhle} />
        <Stack.Screen name="संत बहिरा पिसा, संत नागा, संत दामाजी, संत विसोबा खेचर, संत मालोपंत, संत नरहरी" component={SantBahira} />
        <Stack.Screen name="संत चोखा" component={Santchokha} />
        <Stack.Screen name="संत कसाब" component={Santkasab} />
        <Stack.Screen name="भक्त मीरा" component={Bhaktmira} />
        <Stack.Screen name="संत भीऊ माळी - केमी" component={Santbhiu} />
        <Stack.Screen name="भक्त मंगळमूर्ती आणि सिद्धीबाई" component={Bhaktmanalmurti} />
        <Stack.Screen name="एकनाथ सांप्रदाई संत शिवराम, संत मुकुंद, संत गोडसे शिवराम" component={Eknathsamprdai} />
        <Stack.Screen name="संत रोहिदास" component={Santrohidas} />
        <Stack.Screen name="संत चरित्रकार - कवी महीपती" component={Santcharitrkar} />
        <Stack.Screen name="संत रुद्राई महाराज, संत रामनाथ मनसाराम" component={Santrudrai} />
        <Stack.Screen name="संत रामलिंग आणि संत सुजात, संत भजलींग आणि संत सुलतान" component={Santramling} />
        <Stack.Screen name="संत लक्ष्मण - चाफळ" component={Santlakshman} />
        <Stack.Screen name="संत भिऊबा" component={Santbhiuba} />
        <Stack.Screen name="संत वानखंडी" component={Santvankhandi} />
        <Stack.Screen name="संत कवि शिवराम - पांच पिंपळे" component={Santshivram} />
        <Stack.Screen name="संत गोपाल केशव, संत मैलगीरी अण्णा, संत महादेव" component={Santgopal} />
        <Stack.Screen name="संत कवि शिवराव, संत नारायण कवि, संत अनंत वैष्णव" component={Santkavishivrav} />
        <Stack.Screen name="संत शांतलिंग महाराज - विजोरा" component={Santshantling} />
        <Stack.Screen name="कवी श्रीधर यांचा पुत्र मनोहर" component={Kavishreedhar} />
        <Stack.Screen name="सर्व संत - ज्ञानदेव, एकनाथ, सोपान" component={Santdnyandev} />
        <Stack.Screen name="संत बाबा भोज - धामनगांव" component={Santbababhoj} />
        <Stack.Screen name="संत अवधूत बाबा रोपळेकर - एकनाथ वंशीय" component={Santavdhudh} />
        <Stack.Screen name="संत संतोबा पवार, संत माणकोजी बोधले" component={Santsantoba} />
        <Stack.Screen name="संत शंकर बाबा" component={Santshankar} />
        <Stack.Screen name="संत ज्ञानेश्वर" component={Santdnyaneshwar} />
        <Stack.Screen name="संत गोविंद भट" component={Santgovind} />
        <Stack.Screen name="संत भाई भट" component={Santbhaibhat} />
        <Stack.Screen name="संत सेना महाराज" component={Santsena} />
        <Stack.Screen name="सर्व संत - ज्ञानेश्वर, मुक्ताबाई, निवृत्ती, सोपान, जनार्दन पंत, एकनाथ" component={Sarvsantdnyaneshwar} />
        <Stack.Screen name="दिंडीत सहभागी होण्यासाठी येथे करा" component={Dindi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};