//import liraries
import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles'
import { ProgressCircle } from 'react-native-svg-charts' //https://github.com/JesperLekland/react-native-svg-charts
import IconEnt from 'react-native-vector-icons/Entypo'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Exercicio ({navigation}){

    return (
        <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.contPrinc}>
                    <View style={styles.box}></View>    
                </View>
            </View>
        </ImageBackground>
    );
};