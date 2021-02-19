//import liraries
import React from 'react';
import { ActivityIndicator, ImageBackground, Text, View } from 'react-native';
import styles from './styles';

export default function Consultas ({navigation}){

    return (
        <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.contPrinc}>
                    <View style={styles.box}>
                        <ActivityIndicator size="large" color="#fff"/>
                        <Text style={{fontSize:20, color:'#fff', marginVertical:10}}>Em construção...</Text>
                    </View>    
                </View>
            </View>
        </ImageBackground>
    );
};