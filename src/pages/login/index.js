//import liraries
import React from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from "./styles";


export default function Login ({navigation}) {
    return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
                <View style={styles.container}>
                    <View style={styles.contLogin}>
                        <Text style={styles.textLogin}>Login</Text>
                    </View>
                    <View style={styles.contInputs}>
                        <View>
                            <TextInput style={styles.input} placeholder='Email' placeholderTextColor='white'/>
                            <TextInput style={styles.input} secureTextEntry placeholder='Senha' placeholderTextColor='white'/>
                        </View>
                    </View>
                    
                    <View style={styles.contBotoes}>
                        <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate('dicas')}>
                            <Text style={{color:'#FF6D6D',}}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contAdd}>
                        <Image source={require('../../assets/logoGoogle.png')} style={styles.imageLogos}/>
                        <Image source={require('../../assets/logoFace.png')} style={styles.imageLogos}/>
                        <Image source={require('../../assets/logoApple.png')} style={styles.imageLogos}/>
                        <TouchableOpacity onPress={() => navigation.navigate("cadastro")}>
                        <Text style={styles.reg}>Registre-se</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView> 
    );
};