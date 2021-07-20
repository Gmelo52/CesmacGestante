//import liraries
import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import IconFA from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default function Dieta({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bgLogin.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.contPrinc}>
          <View style={styles.box}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Dieta</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  E o que não pode faltar no prato da gestante?
                </Text>
                <Text style={styles.subText}>
                  As refeições devem contemplar todos os grupos alimentares.
                  {"\n"}- Vegetais e legumes; {"\n"}- Ovos e peixes; {"\n"}-
                  Carnes (fígado 01 vez por semana); {"\n"}- Frutas; {"\n"}-
                  Cereais, como arroz, milho;
                  {"\n"}- Leguminosas (feijão, grão de bico); {"\n"}- Leite e
                  derivados do leite; {"\n"}- Azeite, de preferência extra
                  virgem.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Como distribuir as refeições ao longo do dia?
                </Text>
                <Text style={styles.subText}>
                  As refeições devem ser distribuídas em seis vezes ao dia:
                  {"\n"}- Café da manhã {"\n"}- Lanche da manhã {"\n"}- Almoço{" "}
                  {"\n"}- Lanche {"\n"}- Jantar
                  {"\n"}- Ceia{"\n"}Evite ficar muitas horas sem comer. {"\n"}
                  Entre as refeições beba água!{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  O ganho de peso na gestação deve ser suficiente para:
                </Text>
                <Text style={styles.subText}>
                  - Promover o desenvolvimento fetal completo {"\n"}- Armazenar
                  nutrientes no corpo materno. {"\n"}
                  {"\n"}BAIXE A CARTILHA PARA SABER QUANTO DE PESO VOCÊ PODE
                  GANHAR DURANTE A GESTAÇÃO!{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  A alimentação adequada tem diversos benefícios na gestação,
                  como:
                </Text>
                <Text style={styles.subText}>
                  - Previne doenças como o diabetes gestacional, hipertensão
                  arterial {"\n"}- Assegura reservas biológicas necessárias ao
                  parto, pós-parto e amamentação {"\n"}- Favorece o ganho de
                  peso adequado.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Atenção aos 10 passos para uma alimentação saudável!
                </Text>
                <Text style={styles.subText}>
                  Baixe nossa cartilha para ver todos os passos detalhadamente!{"\n"}{"\n"}
                  1) Faça pelo menos 5 refeições por dia. {"\n"}2) Evite “beliscar” e
                  coma devagar. {"\n"}3) Dê preferências aos alimentos naturais de
                  origem vegetal. {"\n"}4) Ao consumir carnes, retire a pele e a
                  gordura aparente. {"\n"}5) Utilize óleos, gorduras e açúcares em
                  pequenas quantidades. Retire o saleiro da mesa. Prefira
                  alimentos livres de gorduras trans. {"\n"}6) Coma todos os dias
                  legumes, verduras e frutas da época. {"\n"}7) Alimentos
                  industrializados devem ser consumidos com moderação. {"\n"}8) Evite
                  refrigerantes e sucos artificiais, macarrão instantâneo,
                  chocolates, doces, biscoitos recheados e outras guloseimas em
                  seu dia a dia. {"\n"}9) Para evitar a anemia, consuma diariamente
                  alimentos ricos em ferro, junto com frutas que sejam fontes de
                  vitamina C. {"\n"}10) Todos esses cuidados ajudarão você a manter a
                  saúde e o ganho de peso dentro de limites saudáveis.{"\n"}
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.fab}
              onPress={() => {
                Linking.openURL(
                  "https://drive.google.com/file/d/19vViC9fdKL8aXvOELq_a6-JR8zW4KetT/view?usp=sharing"
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
