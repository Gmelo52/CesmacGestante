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

export default function Covid({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bgLogin.png")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.contPrinc}>
          <View style={styles.box}>
            <View style={styles.viewTitle}>
              <Text style={styles.title}>Covid-19</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>O que é COVID-19</Text>
                <Text style={styles.subText}>
                  É a doença causada pela infecção com o vírus SARS-CoV-2. Na
                  maior parte dos casos, apresenta-se sem sintomas ou com
                  sintomas leves, mas pode apresentar sintomas graves.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>Como ocorre a transmissão?</Text>
                <Text style={styles.subText}>
                  A transmissão ocorre de uma pessoa doente para outra, ou por
                  contato próximo. São exemplos dessas formas de contágio:{"\n"}
                  {"\n"}- Aperto das mãos contaminadas com secreções;{"\n"}-
                  Gotículas de saliva{"\n"}- Espirro{"\n"}- Tosse{"\n"}- Catarro
                  {"\n"}- Contato do indivíduo com objetos ou superfícies
                  contaminadas (como celulares, maçanetas, corrimões, mesas etc)
                  e em seguida tocar o rosto, a boca, os olhos.{"\n"}
                  {"\n"}
                  Quanto à transmissão da mãe para o bebê essa pode ocorrer
                  durante o parto, pela contaminação do recém-nascido com as
                  secreções contaminadas da mãe, na amamentação, caso não haja
                  cuidados como uso da máscara, higiene das mãos e superfícies
                  transplacentária, ou seja, com o bebê ainda na barriga da mãe,
                  no entanto é mais raro.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Quais são os sintomas da Covid-19?
                </Text>
                <Text style={styles.subText}>
                  O quadro de sintomas costuma variar de pessoa para pessoa. A
                  maioria das gestantes têm uma boa evolução, com quadro leves.
                  {"\n"}
                  {"\n"}- Assintomáticos: não apresenta sintomas relacionado com
                  a COVID-19. {"\n"}- Sintomáticos: pode apresentar febre,
                  tosse, dor de cabeça, corrimento nasal, espirro, dor de
                  garganta, cansaço físico, diarreia, perda de paladar e olfato.
                  {"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>Como me prevenir?</Text>
                <Text style={styles.subText}>
                  Os cuidados para o grupo das gestantes são os mesmos dos
                  demais grupos sociais, portanto reforçam-se as recomendações
                  da OMS e o Ministério da Saúde:{"\n"}
                  {"\n"}- Use sempre a máscara ao sair de casa;{"\n"}- Adote o
                  isolamento quando existirem sintomas gripais e/ou
                  respiratórios suspeitos daqueles que residem no mesmo
                  endereço;{"\n"}- Evite compartilhar utensílios de uso pessoal;
                  {"\n"}- Lave as mãos frequentemente com água e sabão, ou
                  álcool 70%;{"\n"}- Ao tossir ou espirrar, cobrir a boca e
                  nariz com lenço ou braço para evitar a dispersão de gotículas.
                  Evite usar as mãos nesse caso;{"\n"}- Evite o contato físico
                  nesse momento. Em caso de tosse ou espirros de terceiros,
                  recomenda-se um distanciamento mínimo de 2 metros;{"\n"}-
                  Mantenha um sono regular e uma alimentação saudável;{"\n"}-
                  Fique em casa sempre que possível. Mas não deixe de ir às
                  consultas pré-natal.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>Devo sair para consultas?</Text>
                <Text style={styles.subText}>
                  Sim, afinal as consultas realizadas durante o pré-natal são de
                  extrema importância para o monitoramento das condições da
                  gestação. Além disso, é fundamental a continuidade no
                  calendário vacinal, realização de exames, avaliação de riscos
                  e demais cuidados da rotina.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Visitas em tempos de pandemia
                </Text>
                <Text style={styles.subText}>
                  As visitas às gestantes e puérperas devem ser evitadas, caso
                  ocorra a necessidade, todos devem manter-se usando máscaras.
                  {"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Estou com sintomas, e agora?
                </Text>
                <Text style={styles.subText}>
                  Caso esteja com algum sintoma da COVID-19 procure o serviço de
                  saúde, preferencialmente, procure a Unidade de Saúde em que
                  você está realizando seu pré-natal.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>
                  Estou com Covid-19, o que devo fazer?
                </Text>
                <Text style={styles.subText}>
                  - Realize o isolamento social pelo tempo recomendado;
                  {"\n"}- Mantenha atenção aos sinais de piora dos sintomas;
                  {"\n"}- Siga as recomendações médicas;
                  {"\n"}- Alimente-se bem, beba água e mantenha repouso.
                  {"\n"}Em caso de piora dos sintomas, procure imediatamente um
                  serviço de saúde.{"\n"}
                </Text>
              </View>
              <View style={styles.viewText}>
                <Text style={styles.itemText}>Amamentação e a Covid-19</Text>
                <Text style={styles.subText}>
                  O aleitamento materno já tem sua grande importância na saúde
                  da mãe e do bebê e ainda mais em tempos de pandemia. {"\n"}- Para a
                  mãe com confirmação/suspeita de Covid-19, é recomendado
                  continuar amamentando? Sim. {"\n"}A transmissão do vírus SARS-CoV-2
                  pelo leite materno não foi detectada. Mas é importante seguir
                  as medidas de higiene adequadas. {"\n"}Os benefícios da amamentação
                  são superiores aos potenciais riscos de contaminação. {"\n"}{"\n"}BAIXE
                  AGORA A CARTILHA E CONHEÇA AS RECOMENDAÇÕES PARA REALIZAR O
                  ALEITAMENTO SEGURO NA COVID-19.{"\n"}
                </Text>
              </View>
            </ScrollView>
            <TouchableOpacity
              style={styles.fab}
              onPress={() => {
                Linking.openURL(
                  "https://drive.google.com/file/d/1y7AQDJKcJ9UY1juM3ccDGTPSQ7kR1jRn/view?usp=sharing"
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
