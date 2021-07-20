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
    viewTitle:{
        justifyContent: 'center',
        alignItems:'center',
    },
    title:{
        fontSize:35,
        color:'#fff',
        alignContent:'stretch',
    },
    viewText:{
        width:largura - 70,
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.1)',
        marginVertical: 10,
        justifyContent: 'center',
    },
    itemText:{
        alignItems:'center',
        margin: 10,
        color:'#fff',
        fontSize:22,
    },
    subText:{
        textAlign:'auto',
        marginHorizontal: 10,
        color:'#fff',
        fontSize:16,
    },
    fab:{
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 100,
  }
});
export default styles;