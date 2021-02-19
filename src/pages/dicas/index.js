//import liraries
import React from 'react';
import { ImageBackground, View, Image, Text, TouchableOpacity,} from 'react-native';
import styles from './styles';
import Swiper from 'react-native-swiper'
import { NavigationHelpersContext } from '@react-navigation/native';


export default function Dicas ({navigation}) {
    return (
        <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
            <Swiper showsButtons={true} dotColor='#FFD7D7' activeDotColor='#FF6D6D' autoplay={true} autoplayTimeout={4} 
                    nextButton={<Text style={styles.buttonText}>›</Text>} prevButton={<Text style={styles.buttonText}>‹</Text>}
                    activeDot={<View style={styles.activeDot} />} dot={<View style={styles.dot} />}>
                <View style={styles.slide}>
                    <Image source={require('../../assets/dica1.png')} style={styles.imgDica}/>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../../assets/dica3.png')} style={styles.imgDica}/>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../../assets/dica2.png')} style={styles.imgDica}/>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../../assets/dica4.png')} style={styles.imgDica}/>
                </View>
            </Swiper>
            <View style={styles.contPular}>
                <TouchableOpacity onPress={() => navigation.navigate('home')}>
                    <Text style={{color:'white', fontSize:25}}>Pular ›</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

