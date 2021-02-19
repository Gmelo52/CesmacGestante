import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
    },
    contCarousel:{
        margin: 50,
        alignContent:'center',
        alignItems:'center'

    },
    imgDica:{
        width:250, 
        height:250,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#FF6D6D'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color:'#FF6D6D',
        fontSize:100
    },
    dot:{
        backgroundColor:'rgba(255,255,255,.8)', 
        width: 15, 
        height: 15,
        borderRadius: 10, 
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
    },
    activeDot:{
        backgroundColor: '#FFF', 
        width: 30,
        height: 30, 
        borderRadius: 30, 
        borderColor:'#FF6D6D',
        borderWidth:2,
        marginLeft: 3, 
        marginRight: 3, 
        marginTop: 3, 
        marginBottom: 3,
    },
    contPular:{
        flex:.15,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        alignContent:'center'
    }
});
export default styles;