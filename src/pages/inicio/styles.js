import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    },
    container:{
        flex:.85,
        justifyContent:'center',
        alignItems:'center'
    },
    botoes:{
        flex:.15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    botaoLogin:{
        backgroundColor: '#FFf',
        borderWidth:1,
        borderColor:'#FF6D6D',
        margin:20,
        borderRadius: 5,
        flex:.5,
        alignItems:'center',
        justifyContent: 'center',
    },
    botaoCadastro:{
        backgroundColor: '#FF6D6D',
        borderWidth:3,
        borderColor:'#FF6D6D',
        margin:20,
        borderRadius: 5,
        flex:.5,
        alignItems:'center',
        justifyContent: 'center',
    }

});
export default styles;