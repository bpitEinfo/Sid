import React from 'react';
import {View, Text, Touchable,Image, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {white} from './Constants';
import Field from './Field';

const Login = (props) => {
  return (
  //  <Background>
      <View style={{alignItems: 'center', width: 450}}>
        {/* <Text
          style={{
            color: '#0F78D8',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Login
        </Text> */}
        <View
          style={{
backgroundColor:'#ffebcd',
            height: 800,
            width: 460,
          //  borderTopLeftRadius: 130,
            paddingTop: 90,
            paddingRight:100,
            alignItems: 'center',
          }}>

<View style={{marginTop:0, marginBottom:-100,paddingBottom:100}}>
         <Image style={{width: 110, height: 110, borderRadius:100}}  // required Dimensions and styling of Image
            source={require('../assets/logo_Bpit.png')} // enter your avatar image path 
            />
         </View>
          <Text style={{fontSize: 40, color: '#0F78D8', fontWeight: 'bold'}}>
            Welcome!
          </Text>
          <Text
            style={{
              color: '#0F78D8',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'center', width: '78%', marginBottom: 80}}>
            <Text style={{color: '#0F78D8', fontWeight: 'bold', fontSize: 16,}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor='#0F78D8' btnLabel="Login" Press={() => props.navigation.navigate("Profile")} />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center", marginTop:14}}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
            <Text style={{ color: '#0F78D8', fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
   // </Background>
  );
};

export default Login;