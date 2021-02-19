import { Dimensions, StyleSheet } from "react-native";
const largura = Dimensions.get('window').width;
const altura = Dimensions.get('window').height;

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    },
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'rgba(255,255,255,0.7)',
    },
    buttonText:{
        color:'#FF6D6D',
        fontSize:100
    },
    contPrinc:{
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    },
    box:{
        backgroundColor:'#FF6D6D',
        width:largura - 50,
        height:altura - 200,
        borderRadius:10,
        alignItems:'center',
        flex:.95,
        justifyContent: 'center',
    },
});
export default styles;