//import liraries
import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Dieta ({navigation}){
    return (
        <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
           <View style={styles.container}>
                <View style={styles.contPrinc}>
                    <View style={styles.box}>
                        <View style={styles.viewTitle}><Text style={styles.title}>Dieta</Text></View>
                        <ScrollView showsVerticalScrollIndicator={false}> 
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Qual a importancia de uma boa alimentação da gravidez?</Text>
                                <Text style={styles.subText}>
                                    Uma alimentação saudável e diversificada durante a gestação é importante para sua saúde e
                                    bem-estar, e para a formação e o crescimento adequado do bebê.
                                    A alimentação saudável assegura reservas biológicas necessárias ao parto e pós-parto, garante
                                    nutrientes para o período da lactação/amamentação, como também favorece o ganho de peso
                                    adequado de acordo com o estado nutricional pré-gestacional.
                                    O ganho inadequado de peso na gestação pode ser um fator de risco tanto para a mãe quanto
                                    para a criança, contribuindo para a elevação da prevalência de uma série de problemas,
                                    inclusive o diabetes gestacional.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>O que não pode faltar no prato?</Text>
                                <Text style={styles.subText}>
                                    A gestante deve ingerir vegetais (folhosos e legumes), frutas, carne bovina, frango, fígado
                                    (uma vez por semana), ovos e peixes (sardinha, salmão, atum, pescada, cavalinha),
                                    leguminosas (feijão, grão de bico, lentilha, ervilha), cereais (arroz integral, batata, milho, entre
                                    outros), azeites (de preferência extra virgem), leite e derivados do leite (fora do horário do
                                    almoço e jantar).{'\n'}{'\n'}
                                    As carnes deverão ser assadas, grelhadas, ensopadas ou cozidas, evitando as frituras.
                                    Recomenda-se não ingerir gordura vegetal hidrogenada, que pode comprometer o
                                    crescimento e o desenvolvimento fetal.{'\n'}{'\n'}
                                    É fundamental uma alimentação, predominantemente, de origem vegetal, rica em alimentos
                                    naturais e com o menor processamento industrial possível.{'\n'}{'\n'}
                                    É recomendável o uso de ácido fólico durante toda a gravidez e de sulfato ferroso durante a
                                    gestação e até o 3º mês pós-parto.{'\n'}{'\n'}
                                    Tanto o ácido fólico quanto o sulfato ferroso são distribuídos nas Unidades Básicas de Saúde.
                                    As refeições devem ser distribuídas em seis vezes ao dia, com um intervalo em média de três
                                    horas.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Ganho de peso na gestação</Text>
                                <Text style={styles.subText}>
                                    O ganho de peso na gestação deve ser suficiente para promover o desenvolvimento fetal
                                    completo e também para armazenar nutrientes adequados no organismo materno para o
                                    aleitamento.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>10 passos para que sua alimentação seja saudavel:</Text>
                                <Text style={styles.subText}>
                                    1) Faça pelo menos três refeições (café da manhã, almoço e jantar) e duas refeições menores
                                    por dia, evitando ficar muitas horas sem comer. Entre as refeições beba água.{'\n'}{'\n'}
                                    2) Faça as refeições em horários semelhantes e, sempre que possível, acompanhada de
                                    familiares ou amigos. Evite “beliscar” nos intervalos e coma devagar, desfrutando o que você
                                    está comendo.{'\n'}{'\n'}
                                    3) Alimentos mais naturais de origem vegetal devem ser a maior parte de sua alimentação.
                                    Feijões, cereais, legumes, verduras, frutas, castanhas, leites, carnes e ovos tornam a refeição
                                    balanceada e saborosa. Prefira os cereais integrais.{'\n'}{'\n'}
                                    4) Ao consumir carnes, retire a pele e a gordura aparente. Evite o consumo excessivo de carnes
                                    vermelhas, alternando, sempre que possível, com pescados, aves, ovos, feijões ou legumes.{'\n'}{'\n'}
                                    5) Utilize óleos, gorduras e açúcares em pequenas quantidades ao temperar e cozinhar
                                    alimentos. Evite frituras e adicionar açúcar a bebidas. Retire o saleiro da mesa. Fique atenta
                                    aos rótulos dos alimentos e prefira aqueles livres de gorduras trans.{'\n'}{'\n'}

                                    6) Coma todos os dias legumes, verduras e frutas da época. Ricos em várias vitaminas,
                                    minerais e fibras, possuem quantidade pequena de calorias, contribuindo para a prevenção da
                                    obesidade e de doenças crônicas.{'\n'}{'\n'}
                                    7) Alimentos industrializados, como vegetais e peixes enlatados, extrato de tomate, frutas em
                                    calda ou cristalizadas, queijos e pães feitos com farinha e fermento, devem ser consumidos
                                    com moderação.{'\n'}{'\n'}
                                    8) Evite refrigerantes e sucos artificiais, macarrão instantâneo, chocolates, doces, biscoitos
                                    recheados e outras guloseimas em seu dia a dia.{'\n'}{'\n'}
                                    9) Para evitar a anemia (falta de ferro no sangue), consuma diariamente alimentos ricos em
                                    ferro, principalmente carnes, miúdos, feijão, lentilha, grão-de-bico, soja, folhas verde-escuras,
                                    grãos integrais, castanhas e outros. Junto com esses alimentos, consuma frutas que sejam
                                    fontes de vitamina C, como acerola, goiaba, laranja, caju, limão e outras.{'\n'}{'\n'}
                                    10) Todos esses cuidados ajudarão você a manter a saúde e o ganho de peso dentro de limites
                                    saudáveis. Pratique alguma atividade física e evite as bebidas alcoólicas e o fumo.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>    
                </View>
            </View>
        </ImageBackground>
    );
};