import { StatusBar } from 'expo-status-bar';
import { Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from './style';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../@types/navigation';

import NovotoBg from '../../assets/CloneNovotoBackground.png';
import NovotoLogo from '../../assets/Novoto_Logo_Dark-BG_Header.png'
import { Ionicons } from '@expo/vector-icons';




export function Login() {

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const login = () => {
    navigation.navigate("StackHome");
  }

  return (
    <View style={style.container}>

      <StatusBar style="auto" />

      <ImageBackground resizeMode='cover' style={style.imagem} source={NovotoBg} alt=''>
        <View style={style.logo}>
          <Image style={style.logoImage} source={NovotoLogo} />
        </View>

        <View style={style.containerForms}>

          <View style={style.inputContainer}>
            <TextInput
              keyboardType='email-address'
              placeholderTextColor={'#a0a0a0ff'}
              style={style.inputField}
              placeholder='Digite seu e-mail'
            />
            <Ionicons name="mail-outline" size={20} color="#666" />
          </View>

          <View style={style.inputContainer}>
            <TextInput
              secureTextEntry={true}
              placeholderTextColor={'#a0a0a0ff'}
              style={style.inputField}
              placeholder='Digite sua senha'
            />
            <Ionicons name="eye-off-outline" size={20} color="#666" />
          </View>


          <TouchableOpacity onPress={login} style={style.button}>
            <Text style={style.titleButon}>Entrar</Text>
          </TouchableOpacity>

          <View style={style.footerLinksContainer}>
            <TouchableOpacity>
              <Text style={style.forgotPasswordText}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={style.wannaSignUp}>Quero me cadastrar</Text>
            </TouchableOpacity>

          </View>

        </View>
      </ImageBackground>
    </View>
  );
}
