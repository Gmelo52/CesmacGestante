//import liraries
import React from 'react';
import { ImageBackground, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import Slider from '@react-native-community/slider';


export default function Cadastro ({navigation}) {
    return (
        <KeyboardAvoidingView behavior={"height"}>
            <ImageBackground source={require('../../assets/bgCadastro.png')} style={styles.image}>
                <View style={styles.container}>
                    <View style={styles.contCadastro}>
                        <Text style={styles.textCadastro}>Cadastro</Text>
                    </View>
                    <View style={styles.contInputs}>
                        <TextInput style={styles.input} placeholder='Nome' placeholderTextColor='white'/>
                        <TextInput style={styles.input} placeholder='Email' placeholderTextColor='white'/>
                        <TextInput style={styles.input} placeholder='Senha' placeholderTextColor='white'/>
                    </View>
                    <View style={styles.contSemanas}>
                        <Text style={styles.textSemanas}>Semanas de gravidez</Text>
                    </View>
                    <View style={styles.contSlider}>
                        <Slider style={{width: 290, height: 20}} value={20} minimumValue={1} maximumValue={40} minimumTrackTintColor="#FF6D6D" maximumTrackTintColor="#fff"/>
                    </View>
                    <View style={styles.contBotoes}>
                        <TouchableOpacity style={styles.botaoLogin}>
                            <Text style={{color:'#FF6D6D'}}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contBotoes}>
                        <TouchableOpacity onPress={() => {navigation.navigate('login')}}>
                            <Text style={styles.textSemanas}>Já possui cadastro?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};