import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    },
    container:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    contCadastro:{
        flex:.1,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:150,
        //backgroundColor:'#ccc'
    },
    textCadastro:{
        color:'#FFF',
        fontSize:36,
    },
    contInputs:{
        flex:.4,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'blue'
    },
    input:{
        borderWidth:1,
        borderColor:'#FFF',
        width:290,
        borderRadius:10,
        height:50,
        margin:2,
        textAlign:'left',
        padding:10,
    },
    contSemanas:{
        //backgroundColor:'red',
        justifyContent:"center",
        flex:.06,
        marginLeft:-135
    },
    textSemanas:{
        color:'#FFF',
        fontSize:15,
    },
    contSlider:{
        flex:.1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(255, 215, 215, .2)',
        borderRadius:10,
    },
    contBotoes:{
        flex:.13,
        justifyContent:'center',
        alignItems:'center',
    },
    botaoLogin:{
        backgroundColor: '#FFf',
        borderWidth:1,
        borderColor:'#FF6D6D',
        margin:20,
        borderRadius: 10,
        alignItems:'center',
        justifyContent: 'center',
        width:205,
        height:50,
    }
});
export default styles;