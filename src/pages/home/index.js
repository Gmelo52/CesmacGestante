//import liraries
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import styles from './styles'
import { ProgressCircle } from 'react-native-svg-charts' //https://github.com/JesperLekland/react-native-svg-charts
import IconEnt from 'react-native-vector-icons/Entypo'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home ({navigation}){

    return (
        <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.contPrinc}>
                    <View style={styles.box}>
                        <Text style={{fontSize:35, color:'#FFF', marginTop: 20}}>VOCÊ ESTÁ COM:</Text>
                        <View style={styles.boxGraf}>
                            <ProgressCircle style={{ height:250, width:250, marginTop:20}} progress={.2} progressColor={'#FFF'} backgroundColor={'#FFD7D7'} strokeWidth={20}/>
                            <View style={styles.semanas}>
                                <Text style={{fontSize: 90, color: '#FFF',}}>10</Text>
                                <Text style={{fontSize: 25, color: '#FFF'}}>Semanas</Text>
                            </View>
                        </View>
                        <View style={styles.scroll} bounces={true}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={styles.boxButton}>
                                    <TouchableOpacity style={styles.boxIconButton} onPress={() => navigation.navigate('dieta')}>
                                        <IconMCI name="food-variant" color={'#FF6D6D'} size={25} style={{margin:5}}/>
                                        <Text style={{fontSize:15,color:'#FF6D6D', textAlign: 'center', marginBottom: 5,}}>Dieta</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.boxIconButton} onPress={() => navigation.navigate('exercicio')}>
                                        <IconFA5 name="running" color={'#FF6D6D'} size={25} style={{margin:5}}/>
                                        <Text style={{fontSize:15, color:'#FF6D6D', textAlign: 'center', marginBottom: 5}}>Exercicio</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.boxIconButton} onPress={() => navigation.navigate('covid')}>
                                        <Image source={require('../../assets/virus.png')} style={{width:25, height:25, margin: 5}}/>
                                        <Text style={{fontSize:15,color:'#FF6D6D', textAlign: 'center', marginBottom: 5}}>Covid-19</Text>
                                        </TouchableOpacity>
                                    <TouchableOpacity style={styles.boxIconButton} onPress={() => navigation.navigate('cuidadosBucais')}>
                                        <Image source={require('../../assets/escova.png')} style={{width:25, height:25, margin:5}}/>
                                        <Text style={{fontSize:15, color:'#FF6D6D', textAlign: 'center', marginBottom: 5}}>Cuidados Bucais</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.boxIconButton} onPress={() => navigation.navigate('fiqueSabendo')}>
                                        <IconEnt name="megaphone" color={'#FF6D6D'} size={25} style={{margin:5}}/>
                                        <Text style={{fontSize:15, color:'#FF6D6D', textAlign: 'center', marginBottom: 5}}>Fique Sabendo</Text>
                                    </TouchableOpacity>
                                        </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};
