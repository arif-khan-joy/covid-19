import { View, StyleSheet,Image } from 'react-native'
import React from 'react'
import Text from './text/text'
import { colors } from '../theme/colors'

export default function Prevention() {
  return (
    <View style={styles.container}>
        <Text preset="h2" style={styles.preText}>Prevention</Text>
        <View style={styles.imageSection}>
            <View style={styles.section}>
                <Image source={require('../../assets/images/bg4.png')}/>
                <Text preset="h4" style={styles.text}>Avoid close contact</Text>
            </View>
            <View  style={styles.section}>
                <Image source={require('../../assets/images/bg1.png')}/>
                <Text preset="h4" style={styles.text}>Clean your hands often</Text>
            </View>
            <View  style={styles.section}>
                <Image source={require('../../assets/images/bg2.png')}/>
                <Text preset="h4" style={styles.text}>Wear a facemask</Text>
            </View>
        </View>
        <View style={styles.test}>
            <Image source={require('../../assets/images/Group.png')} style={styles.imagePart}/>
            <View style={styles.textPart}>
                <Text style={{fontWeight:'bold',fontSize:20}} preset="h4">Do your own test!</Text>
                <Text style={{paddingRight:10,paddingTop:5}}>Follow the instructions to do your own test.</Text>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    preText:{
        color:colors.black,
        marginLeft:24
    },
    imageSection:{
        flexDirection:'row',
        paddingTop:20,
        justifyContent:'space-between',
        marginRight:10
    },
    text:{
        color:colors.black,
        textAlign:'center'
    },
    section:{
        width:100,
        alignItems:'center',
        justifyContent:'center'
    },
    container:{
        paddingLeft:10,
        paddingRight:10
        
    },
    test:{
        height:100,
        backgroundColor:colors.indigo,
        borderRadius:20,
        marginLeft:10,
        marginRight:10,
        flexDirection:'row',
        position:'relative',
        marginTop:20,
        

        
    },
    imagePart:{
        
        bottom:18,
        marginLeft:20,
        width:105
    },
    textPart:{
        width:200,
        marginLeft:15,
        paddingRight:10,
        paddingTop:10
       
    }
})