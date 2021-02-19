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
        flex:.95
    },
    boxGraf:{
        justifyContent:'center',
        alignItems: 'center',
        width:largura - 50,
        height:250,
    },
    semanas:{
        margin:20,
        height:200,
        width:200,
        justifyContent: 'center',
        alignItems:'center',
        position:'absolute'
    },
    boxButton:{
        width:'100%', 
        height:100,
        flexDirection:'row',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'space-around',
    },
    boxIconButton:{
        flexDirection:'column',
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
        height:altura / 7,
        width:80,

    }
});
export default styles;