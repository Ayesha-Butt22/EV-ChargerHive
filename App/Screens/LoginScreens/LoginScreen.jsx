import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import { Image } from 'react-native';


export default function LoginScreen() {
  return (
      <View style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop:50,
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
            color:'#000'
            
            
        }
      
    }
)