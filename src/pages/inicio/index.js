import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";

export default function Inicio ({navigation}) {
    return (
        <ImageBackground source={require('../../assets/bgInicio.png')} style={styles.image}>
            <View style={styles.container}>
                <Text style={{fontWeight: 'bold', color:'#FF6D6D', fontSize: 32, marginBottom: 250, }}>Gestação Florecer</Text>
            </View>  
            <View style={styles.botoes}>
                <TouchableOpacity style={styles.botaoLogin} onPress={() => navigation.navigate("login")} >
                    <Text style={{color:'#FF6D6D',fontWeight: "bold"}}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.botaoCadastro} onPress={() => navigation.navigate("cadastro")}>
                    <Text style={{color:'#FFF',fontWeight:'bold'}}>CADASTRO</Text>
                </TouchableOpacity>
            </View>      
        </ImageBackground>
    );
};