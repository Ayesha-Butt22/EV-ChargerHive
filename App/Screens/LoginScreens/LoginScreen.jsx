import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import Colors from './../../utils/color'
import { TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../../hooks/warmUpBrowser';
import {useOAuth} from  '@clerk/clerk-expo';

WebBrowser.maybecompleteAuthSession();

export default function LoginScreen() {
    
useWarmBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = async() =>
    {
         try{
const{createdSessionId, signIn, signUp,setAcive}=
await startOAuthFlow();

if (createdSessionId)
{
setActive({session: createdSessionID });
}
else
{
//use signin or sign up for next step such as MFA
}
}
catch(err)
{
console.error("OAuth error",err);
}
    }

  return (
      <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop:80,
      }}>
          <Text>EV-ChargerHive Station
              style={styles.text} 
          </Text>
<Image 
        source={require('C:/App-s/Semester/EV-ChargeHive/assets/images/logo.jpg')} 
        style={styles.bgImageImage} 
          />
          <View style={{ padding: 20 }}>
              <Text style={styles.heading}>Your Ultimate EV-ChargerHive Station App</Text>
              <Text style={styles.description}>Find EV charging station near you , plan trip and so much more in just one click</Text>
              <TouchableOpacity style={styles.button}
              onPress={onPress}
              >
                  
                  <Text style={{color:Colors.WHITE , textAlign:'center',fontFamily:'outfit',fontSize:17}}>Login With Google</Text>
              </TouchableOpacity>
          </View>
    </View>
  );
};


const styles = StyleSheet.create(
    {
        text: {
            width: 200,
            height: 40,
            objectFit: 'contain'
    
        },
    
        bgImage:
        {
            width: '100',
            height: 220,
            marginTop: 20,
            objectFit: 'cover'

        },

      heading:
        {
            fontSize: 25,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            marginTop:20
        },
      
        description:
        {
            fontSize: 17,
            fontFamily: 'outfit',
            marginTop: 15,
            textAlign: 'center',
            color: '#000',
            color:Colors.GRAY
        },
       
        button:
        {
            backgroundColor: Colors.PRIMARY,
            padding: 16,
            display: 'flex',
            borderRadius: 99,
            marginTop:70,
            
                
            
        }
      
    }
)