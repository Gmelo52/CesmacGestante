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

export default function CuidadosBucais({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bgLogin.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.contPrinc}>
          <View style={styles.box}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Saúde bucal</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Conhece pré-natal odontológico?
                </Text>
                <Text style={styles.subText}>
                  Durante a gestação a mulher pode apresentar doenças na boca e
                  nos dentes, como inflamações na gengiva. As mudanças orais
                  mais comuns durante a gravidez são: {"\n"}
                  {"\n"}- Cárie dentária{"\n"}- Erosão dentária (desgaste dos
                  dentes) {"\n"}- Gengivite (inflamação com sangramento da
                  gengiva){"\n"}- Hiperplasia gengival (gengiva inchada e
                  vermelha) {"\n"}- Granuloma gravídico (crescimento da gengiva)
                  {"\n"}- Xerostomia (alteração na saliva) {"\n"}
                  {"\n"}As doenças bucais podem aumentar a possibilidade da
                  grávida desenvolver pré- eclâmpsia, parto prematuro e baixo
                  peso do bebê ao nascimento. O cuidado odontológico deve
                  acontecer em qualquer momento da gestação. A saúde bucal da
                  gestante interfere na saúde do bebê.{"\n"}
                  {"\n"}
                  Isso exige muita atenção, porque essas doenças podem aumentar
                  a possibilidade de a mulher grávida desenvolver pré-eclâmpsia,
                  parto prematuro e baixo peso do bebê ao nascimento.{"\n"}
                  {"\n"}
                  Por isso, não deixe de marcar sua consulta com o dentista
                  assim que iniciar seu pré-natal.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Mitos sobre o atendimento odontológico a gestante
                </Text>
                <Text style={styles.subText}>
                  1. Já ouviu alguém dizer que a mulher perde cálcio durante a
                  gestação? Isso é um MITO! {"\n"}2. Outro MITO é que a gestante
                  não pode fazer raio-X odontológico. A quantidade de radiação
                  neste exame é baixa, dessa forma NÃO fará mal ao bebê. {"\n"}
                  3. Você também pode ter ouvido falar que grávidas não podem
                  tomar anestesia! Isso é MITO! {"\n"}
                  {"\n"}O uso de anestesia nas gestantes é permitido, é
                  importante informar ao dentista sobre a gravidez para que ele
                  possa utilizar a substância adequada.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>Higiene bucal</Text>
                <Text style={styles.subText}>
                  - Usar o fio dental e escovar os seus dentes com creme dental
                  fluoretado duas ou três vezes ao dia. O uso do fio dental deve
                  ser antes da escovação!{"\n"}- Escovar os dentes após o café
                  da manhã, almoço e antes de dormir.{"\n"}- Trocar a escova
                  dental a cada três meses.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>Enjôo x Escovar os dentes</Text>
                <Text style={styles.subText}>
                  Durante a gestação, a mulher passa por diversas alterações,
                  dentre essas, os episódios de vômitos. Nestas ocasiões dê
                  preferência ao enxague com antissépticos orais ou fazer o
                  enxague bucal com uma colher de sopa de bicarbonato de sódio
                  diluído em um copo d’água.{"\n"}
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.fab}
              onPress={() => {
                Linking.openURL(
                  "https://drive.google.com/file/d/1FyBB8grsJLTWzA87y7Ahg4BOwyRWLXvt/view?usp=sharing"
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
