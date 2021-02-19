//import liraries
import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { ProgressCircle } from "react-native-svg-charts"; //https://github.com/JesperLekland/react-native-svg-charts
import IconEnt from "react-native-vector-icons/Entypo";
import IconFA5 from "react-native-vector-icons/FontAwesome5";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import IconMI from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function fiqueSabendo({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bgLogin.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.contPrinc}>
          <View style={styles.box}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Fique Sabendo</Text>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.viewText}>
                  <Text style={styles.itemText}>Tipos de parto</Text>
                  <Text style={styles.subText}>
                    Para as mamães gestantes, há diversos tipos de partos, e
                    justamente para que vocês possam conhecer o tão esperado
                    momento do parto, iremos detalhar cada um deles a seguir e
                    vocês possam se sentir seguras: {"\n"}
                  </Text>
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.itemText}>O que é parto normal?</Text>
                  <Text style={styles.subText}>
                    Inicialmente há o famoso parto normal, também conhecido como
                    parto vaginal, em que o bebê é liberado através das
                    contrações uterinas que são acompanhadas de dores na
                    virilha. Pode ser feito em casa ou ambiente hospitalar, mas
                    em qualquer destas condições deve haver o acompanhamento
                    profissionais capacitados e segurança para a mãe e bebê, com
                    os monitoramentos da evolução do trabalho de parto. A
                    recuperação é rápida (geralmente 48 horas após o parto),
                    baixos riscos e o recém-nascido tem contato imediato com a
                    mãe após nascer. {"\n"}
                  </Text>
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.itemText}>
                    Há outras formas de parto normal?
                  </Text>
                  <Text style={styles.subText}>
                    Existem outras formas de parto natural que são menos comuns,
                    mas que valem a pena serem citadas. Uma delas é o parto de
                    lótus, que mesmo após o parto, o recém-nascido é mantido
                    conectado à placenta. E o parto na água, que é realizado em
                    uma banheira ou piscina. Todavia, todos eles devem ser
                    feitos no ambiente hospitalar com o devido amparo dos
                    profissionais de saúde.
                    {"\n"}
                  </Text>
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.itemText}>O que é parto cerárea?</Text>
                  <Text style={styles.subText}>
                    Ela é marcada pela aplicação de anestesia, seguida de um
                    corte cirúrgico seguro no abdômen da gestante, por onde o
                    bebê será retirado, com posterior cicatrização, que sendo
                    bem tratada com massagens e cremes pode ter uma boa
                    recuperação estética. Sua desvantagem se dá pelo maior tempo
                    de recuperação da mãe no pós parto.
                    {"\n"}
                  </Text>
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.itemText}>
                    Em que situaçãoes é efetuado o parto em cesárea?
                  </Text>
                  <Text style={styles.subText}>
                    Ela pode ser feita por decisão do médico e da mãe, ou caso
                    haja alguma condição prévia de saúde que a impeça de
                    realizar essa forma de parto, como hipertensão, câncer,
                    herpes ou mesmo se já passou por outras 2 cesarianas
                    anteriormente. A posição do bebê no útero e seu estado de
                    saúde também podem exigir esse tipo de parto, o que
                    demonstra a importância de um pré-natal bem feito.
                    {"\n"}
                  </Text>
                </View>
                <View style={styles.viewText}>
                  <Text style={styles.itemText}>O que é parto humanizado?</Text>
                  <Text style={styles.subText}>
                    Existem diversas modalidades que foram criadas para garantir
                    maior segurança e conforto para a mãe. No parto humanizado,
                    a equipe de saúde permite o protagonismo da mulher e de seus
                    desejos, com intervenção médica mínima e em um ambiente
                    reconfortante, geralmente, de baixa luminosidade, silencioso
                    e temperatura amena. Esse método é realizado caso tenha
                    ocorrido um pré-natal que prove a boa saúde da mãe e do bebê
                    e garante um parto sem estresse e com todo o cuidado.
                    {"\n"}
                  </Text>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
