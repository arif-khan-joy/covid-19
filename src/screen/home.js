import { View,StyleSheet,Image ,Pressable} from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'
import Text from '../component/text/text'
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Prevention from '../component/Prevention';
export default function Home() {
  return (
    <View>
       <View style={styles.headerSection}>
            <View style={styles.header}>
                <Image source={require('../../assets/images/menu.png')}/>
                <Image source={require('../../assets/images/bell.png')}/>
            </View>
            <View style={styles.covid}>
                <Text preset="h1">Covid-19</Text>
                <Image source={require('../../assets/images/sovi.png')}/>
            </View>
            <View style={styles.text}>
                <Text style={{fontSize:25}} preset="h3">Are you feeling sick?</Text>
                <Text style={styles.paraText}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.callNow}>
                    <Feather name="phone" size={24} color="white" />
                    <Text style={{paddingLeft:10,fontWeight:'bold'}}>Call Now</Text>
                </Pressable>
                <Pressable style={styles.sms}>
                <AntDesign name="message1" size={24} color="white" backgroundColor="white" />
                    <Text style={{paddingLeft:10,fontWeight:'bold'}}>Send SMS</Text>
                </Pressable>
            </View>
       </View>
       <Prevention/>
    </View>
  )
}
const styles = StyleSheet.create({
    headerSection:{
        height:400,
        backgroundColor:colors.indigo,
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30
    },
    header:{
        flexDirection:'row',
        paddingHorizontal:27,
        paddingTop:56,
        justifyContent:'space-between'
    },
    covid:{
        flexDirection:'row',
        paddingHorizontal:24,
        justifyContent:'space-between',
        paddingTop:60
    },
    text:{
        marginHorizontal:24,
        paddingTop:30
    },
    paraText:{
        fontSize:14,
        lineHeight:18,
        paddingTop:10
    },
    button:{
        flexDirection:'row',
        marginHorizontal:24,
        justifyContent:'space-between',
        paddingTop:30
    },
    callNow:{
        flexDirection:'row',
        width:140,
        height:50,
        backgroundColor:colors.red,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    sms:{
        flexDirection:'row',
        width:140,
        height:50,
        backgroundColor:colors.sky,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    }
})