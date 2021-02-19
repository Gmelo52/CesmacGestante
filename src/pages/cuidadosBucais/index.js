//import liraries
import React from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import styles from './styles'
import { ProgressCircle } from 'react-native-svg-charts' //https://github.com/JesperLekland/react-native-svg-charts
import IconEnt from 'react-native-vector-icons/Entypo'
import IconFA5 from 'react-native-vector-icons/FontAwesome5'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import IconMI from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CuidadosBucais ({navigation}){

    return (
        <ImageBackground source={require('../../assets/bgLogin.png')} style={styles.image}>
            <View style={styles.container}>
                <View style={styles.contPrinc}>
                    <View style={styles.box}>
                        <View style={styles.viewTitle}><Text style={styles.title}>Saúde bucal</Text></View>
                        <ScrollView showsVerticalScrollIndicator={false}> 
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Pré-natal odontológico</Text>
                                <Text style={styles.subText}>
                                    Durante a gestação a mulher pode desenvolver diversas doenças na boca e
                                    dentes, como inflamações na gengiva.{'\n'}{'\n'}
                                    Isso exige muita atenção, porque essas doenças podem aumentar a possibilidade
                                    de a mulher grávida desenvolver pré-eclâmpsia, parto prematuro e baixo peso
                                    do bebê ao nascimento.{'\n'}{'\n'}
                                    Por isso, não deixe de marcar sua consulta com o dentista assim que iniciar seu
                                    pré-natal.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Estou sentindo algo diferente na minha boca, e agora?</Text>
                                <Text style={styles.subText}>
                                    Durante a gestação é muito comum apresentar alterações bucais, decorrente das
                                    elevações hormonais. Em casos de incômodo bucal, como inchaço ou sangramento
                                    gengival, dor nos dentes, procure o mais rápido possível o atendimento odontológico
                                    para que assim o dentista inicie o tratamento adequado, junto com o seu pré-natal
                                    odontológico.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Mitos sobre o atendimento odontolócio a gestante</Text>
                                <Text style={styles.subText}>
                                    1. Já ouviu alguém dizer que a mulher perde cálcio durante a gestação?
                                    Isso é um MITO!{'\n'}{'\n'}
                                    É importante que toda gestante tenha uma boa alimentação, rica em nutrientes
                                    entre eles o cálcio, através do leite, iogurte, folhas verdes escuras, como a couve,
                                    entre outros, mas não porque irá ter seus dentes descalcificados.{'\n'}{'\n'}
                                    2. Outro MITO é que a gestante não pode fazer raio-X odontológico.{'\n'}{'\n'}
                                    A quantidade de radiação exposta no exame radiográfico odontológico é baixa,
                                    dessa forma não fará mal ao bebê. Durante o exame é importante lembrar o uso do
                                    colete de chumbo.{'\n'}{'\n'}
                                    3. Você também pode ter ouvido falar que grávidas não podem tomar
                                    anestesia! Isso é MITO!{'\n'}{'\n'}
                                    O uso de anestesia nas gestantes é permitido, é importante informar ao dentista
                                    sobre a gravidez para que ele possa utilizar a substância adequada para a gestante.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Cuidados com a saúde bucal</Text>
                                <Text style={styles.subText}>
                                    Importante! O tratamento odontológico deve acontecer em qualquer momento
                                    da gestação. A saúde bucal da gestante interfere na saúde do bebê.{'\n'}{'\n'}
                                    1. Técnica de escovação dental
                                    Para realização da escovação o ideal é que você utilize o creme dental com flúor
                                    e realize a higienização regularmente, após alimentar-se. Também faça a higienização
                                    com calma, nada de pressa!{'\n'}{'\n'}
                                    Ao escovar posicionar a escova num ângulo reto em relação aos dentes, com
                                    movimentos para frente e para trás (movimentos de esfregação). Ao chegar nos
                                    dentes frontais, gire a escova sentido vertical e use movimentos suaves de cima para
                                    baixo.{'\n'}{'\n'}
                                    2. Uso do fio dental e bochecho
                                    O uso do fio dental, que deve ser utilizado antes da escovação, sendo enrolado
                                    aproximadamente 40 cm de fio ao redor de cada dedo médio, deixando uns dez
                                    centímetros entre os dedos, logo após segurando o fio dental entre o polegar e o
                                    indicador das duas mãos, deslizando levemente para cima e para baixo entre os
                                    dentes, não forçar o fio contra a gengiva, pois ele pode machucar o tecido gengival.
                                    Lembrar de utilizar uma parte nova do pedaço do fio dental em cada dente a ser
                                    limpo, durante a remoção do fio, use movimentos de trás para frente, retirando-o do
                                    meio dos dentes.{'\n'}{'\n'}
                                    O uso do bochecho com antissépticos orais também pode ser realizado, porém o
                                    bochecho não substitui a escovação.{'\n'}{'\n'}
                                    3. Enjôo x Escovar os dentes{'\n'}{'\n'}
                                    Durante a gestação, a mulher passa por diversas alterações, dentre elas os
                                    episódios de vômitos, nestas ocasiões dê preferência ao enxague com antissépticos
                                    orais ou fazer o enxague com uma colher de sopa de bicarbonato de sódio diluído em
                                    um copo d’água.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>A Saúde Bucal e os Trimestres Gestacionais</Text>
                                <Text style={styles.subText}>
                                    1º Trimestre{'\n'}{'\n'}
                                    Durante o primeiro trimestre, que acontece até a 12ª semana ou 3 meses de
                                    gravidez, ocorre a adaptação da mulher a gravidez, você pode apresentar náuseas e
                                    vômitos e estar mais temerosa, por ser um período mais delicado da gestação.{'\n'}{'\n'}

                                    Esse não é o momento mais confortável para gestante passar por intervenções, a
                                    não alguma urgência odontológica, mas já é um bom período para iniciar a primeira
                                    consulta do pré-natal odontológico.{'\n'}{'\n'}
                                    2º Trimestre{'\n'}{'\n'}
                                    No tão esperado segundo trimestre, entre a 13ª e 26ª semana ou 4 e 6 meses, os
                                    dentes do bebê já estarão formados e sua barriga ainda não estará tão grande. É o
                                    melhor momento para realização de procedimentos mais invasivos, caso necessário.{'\n'}{'\n'}
                                    3º Trimestre{'\n'}{'\n'}
                                    Esse é o momento em que você pode vir apresentar mais desconfortos, como
                                    aumento de peso, dificuldade respiratória, inchaço nos membros inferiores dentre
                                    outras queixas. Os procedimentos odontológicos podem ser realizados, porém não
                                    devem ultrapassar a metade desse período, ou seja, a partir de 34 semanas no 8º mês.
                                </Text>
                            </View>
                            <View style={styles.viewText}>
                                <Text style={styles.itemText}>Alimentação e a saúde bucal</Text>
                                <Text style={styles.subText}>
                                    É necessário que você esteja atenta para o cuidado com a alimentação, como
                                    para o cuidado com a qualidade e a frequência ingerida dos alimentos, evitando assim
                                    uma dieta cariogênica, ou seja, rica em açúcar e carboidratos que possuem amido,
                                    como bolachas, pães e bolos, já que durante a gestação a sua capacidade de tampão
                                    da saliva está alterada, o que pode fragilizar a integridade dos dentes e da mucosa
                                    bucal.{'\n'}{'\n'}
                                    Fundamental também manter a regularidade de higiene oral após as refeições.
                                </Text>
                            </View>
                        </ScrollView>
                    </View>    
                </View>
            </View>
        </ImageBackground>
    );
};