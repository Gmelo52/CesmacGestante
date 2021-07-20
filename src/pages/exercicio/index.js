//import liraries
import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";
import IconFA from "react-native-vector-icons/FontAwesome";

export default function Exercicio({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bgLogin.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.contPrinc}>
          <View style={styles.box}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Exercício</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Quais são os benefícios da atividade física durante a
                  gestação?
                </Text>
                <Text style={styles.subText}>
                  - Condicionamento físico {"\n"}- Melhora da resistência e
                  flexibilidade muscular {"\n"}- Diminuição da fadiga, câimbras
                  e edema (inchaços) {"\n"}- Controle da postura {"\n"}-
                  Controle do peso {"\n"}- Redução das doenças de risco
                  relacionadas, como a diabetes gestacional {"\n"}- Equilíbrio
                  mental e emocional{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Quando e como deve ser feito?
                </Text>
                <Text style={styles.subText}>
                  Durante toda a gestação é importante manter-se ativa.{"\n"}- 3
                  a 5 vezes por semana, durante um período de 30 minutos, de
                  atividades de intensidade leve/moderada {"\n"}- É importante
                  que a gestante busque orientação profissional.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Quais as atividades físicas que eu posso fazer?
                </Text>
                <Text style={styles.subText}>
                  - Caminhadas
                  {"\n"}- Alongamentos
                  {"\n"}- Corridas leves
                  {"\n"}- Bicicleta (grau leve)
                  {"\n"}- Hidroginástica e natação
                  {"\n"}- Ginástica
                  {"\n"}- Exercite a respiração: respire lenta e profundamente,
                  várias vezes ao dia.
                  {"\n"}As caminhadas melhoraram a circulação do sangue,
                  aumentam a disposição e a sensação de bem-estar. Se não houver
                  contraindicação, devem ser mantidas do início ao fim da
                  gravidez.{"\n"}
                  {"\n"}BAIXE NOSSA CARTILHA PARA CONHECER AS CONTRAINDICAÇÕES
                  PARA REALIZAÇÃO DE ATIVIDADE FÍSICA!{"\n"}
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.fab}
              onPress={() => {
                Linking.openURL(
                  "https://drive.google.com/file/d/1daFvN87-x9HEqiUfsh3Q6jQc_nqJtA1d/view?usp=sharing"
                );
              }}
            >
              <IconFA name="cloud-download" size={30} color="#FF6D6D" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
