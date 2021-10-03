import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    menuItem:{
        marginTop:20,
        marginLeft: 20,
        marginRight: 20
    },
    menuText:{
        color:'white',
        fontSize:16,
        fontWeight:"bold",
        marginLeft: 15,
        textTransform:'uppercase'
    },
    menuRow:{
        marginTop: 25,
        marginBottom: 15,
        flexDirection:'row',
        alignItems:'center'
    },
    menuTextBox:{
        flexGrow:1,
   },
   arrowIcon:{
        color: "#4D4D4E"
   },
   subTitle:{
       color:'gray',
       fontSize: 14,
       marginLeft: 15
   }
  
})
export default styles