//import liraries
import React from 'react';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import styles from './styles';

export default function Covid ({navigation}){

    return (
        <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.contPrinc}>
                    <View style={styles.box}>
                        <View style={styles.viewTitle}><Text style={styles.title}>Covid-19</Text></View>
                        <ScrollView showsVerticalScrollIndicator={false}> 
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>O que é COVID-19</Text>
                                <Text style={styles.subText}>
                                    É a doença causada pela infecção com o vírus SARS-CoV-2. Na maior parte dos casos,
                                    apresenta-se sem sintomas ou com sintomas leves, mas pode apresentar sintomas graves.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Como ocorre a transmissão?</Text>
                                <Text style={styles.subText}>
                                    A transmissão ocorre de uma pessoa doente para outra, ou por contato próximo. São
                                    exemplos dessas formas de contágio:{'\n'}{'\n'}
                                    ● Aperto das mãos contaminadas com secreções;{'\n'}
                                    ● Gotículas de saliva{'\n'}
                                    ● Espirro{'\n'}
                                    ● Tosse{'\n'}
                                    ● Catarro{'\n'}
                                    ● Contato do indivíduo com objetos ou superfícies contaminadas (como celulares, maçanetas,
                                    corrimões, mesas etc) e em seguida tocar o rosto, a boca, os olhos.{'\n'}{'\n'}
                                    Quanto à transmissão da mãe para o bebê essa pode ocorrer durante o parto, pela contaminação
                                     do recém-nascido com as secreções contaminadas da mãe,
                                    na amamentação, caso não haja cuidados como uso da máscara, higiene das mãos e superfícies
                                    transplacentária, ou seja, com o bebê ainda na barriga da mãe, no entanto é mais raro.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Como me prevenir?</Text>
                                <Text style={styles.subText}>
                                    Os cuidados para o grupo das gestantes são os mesmos dos demais grupos sociais,
                                    portanto reforçam-se as recomendações da OMS e o Ministério da Saúde:{'\n'}{'\n'}
                                    ● Use sempre a máscara ao sair de casa;{'\n'}
                                    ● Adote o isolamento quando existirem sintomas gripais e/ou respiratórios suspeitos
                                    daqueles que residem no mesmo endereço;{'\n'}
                                    ● Evite compartilhar utensílios de uso pessoal;{'\n'}
                                    ● Lave as mãos frequentemente com água e sabão, ou álcool 70%;{'\n'}
                                    ● Ao tossir ou espirrar, cobrir a boca e nariz com lenço ou braço para evitar a dispersão
                                    de gotículas. Evite usar as mãos nesse caso;{'\n'}
                                    ● Evite o contato físico nesse momento. Em caso de tosse ou espirros de terceiros,
                                    recomenda-se um distanciamento mínimo de 2 metros;{'\n'}
                                    ● Mantenha um sono regular e uma alimentação saudável;{'\n'}
                                    ● Fique em casa sempre que possível. Mas não deixe de ir às consultas pré-natal.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Quais os sintomas?</Text>
                                <Text style={styles.subText}>
                                    O quadro sintomático da COVID-19 costuma variar de pessoa para pessoa, com casos
                                    variando de assintomáticos (sem sintomas) até quadros sintomáticos mais graves. No caso
                                    de gestantes, os efeitos dessa doença ainda estão sendo investigados, porém se percebe
                                    que o seu seguimento tem sido semelhante aos demais grupos da população em geral.
                                    Dessa forma, divide-se:{'\n'}{'\n'}
                                    ● Assintomáticos: aqueles que não apresentam qualquer manifestação de sintomas
                                    gripais, ou qualquer outro quadro relacionado com a COVID-19;{'\n'}
                                    ● Sintomáticos: com período de incubação variando de 2 a 14 dias, os sintomáticos
                                    podem apresentar quadros de febre, tosse seca, corrimento nasal, cansaço, dor de
                                    garganta, diarreia, perda de paladar e olfato, além de quadros mais graves que
                                    compreendem a dificuldade respiratória, dor no peito, reação hiperinflamatória,
                                    desorientação.{'\n'}
                                    É válido ressaltar que nem toda febre, coriza, tosse ou qualquer um dos sintomas
                                    listados é certeza para COVID-19, mas podem surgir como quadro suspeito, por isso a
                                    importância de estar atenta e buscar atendimento.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Devo sair para consultas?</Text>
                                <Text style={styles.subText}>
                                    Sim, afinal as consultas realizadas durante o pré-natal são de extrema importância
                                    para o monitoramento das condições da gestação. Além disso, é fundamental a
                                    continuidade no calendário vacinal, realização de exames, avaliação de riscos e demais
                                    cuidados da rotina.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Estou com sintomas, e agora?</Text>
                                <Text style={styles.subText}>
                                    Caso esteja com algum sintoma compatível com a COVID-19 é fundamental procurar
                                    o suporte de saúde, preferencialmente, procure a Unidade de Saúde em que você está
                                    realizando seu pré-natal.{'\n'}
                                    O SUS também conta com serviços como o Disque 136, Whatsapp +55 61 9938-0031
                                    e até mesmo o aplicativo do Ministério da Saúde, o Coronavírus - SUS, disponível em todas
                                    plataformas digitais. Nesses serviços, você poderá contar com uma equipe especializada do
                                    Ministério da Saúde pronta para tirar dúvidas, fazer a triagem de acordo com os seus
                                    sintomas e encaminhá-la para o serviço mais próximo, seja em uma unidade da equipe
                                    atenção primária, ou nos Centros de Atendimento para Enfrentamento da Covid-19.{'\n'}
                                    Em todo caso, não se desespere, procure informações nas fontes confiáveis e siga as
                                    recomendações.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>    
                </View>
            </View>
        </ImageBackground>
    );
};