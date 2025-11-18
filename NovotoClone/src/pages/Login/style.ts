import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '65%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  logoImage: {
    width: '90%',
    height: '100%',
    resizeMode: 'contain'
  },

  containerForms: {
    backgroundColor: 'transparent',
    width: '80%',
    height: '30%',
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    borderRadius: 8,
  },

  input: {
    width: '100%',
    height: '25%',
    backgroundColor: '#f4f4f4ff',
    color: '#707070ff',
    fontSize: 17,
    borderRadius: 8,
    paddingLeft: 15,
    fontFamily: 'Parkinsans-Regular'
  },

  button: {
    width: '100%',
    backgroundColor: '#888888ff',
    borderRadius: 8,
    height: 50,
    justifyContent: 'center'
  },

  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    shadowColor: '#00000010',
  },

  inputField: {
    flex: 1,
    color: '#333',
    fontSize: 16,
    height: '100%',
    fontFamily: 'Parkinsans-Regular',
    paddingRight: 10,
  },

    titleButon: {
    color: '#ebebebff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Parkinsans-Regular',
  },

  footerLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 25,

  },

  forgotPasswordText: {
    color: '#ebebebff',
    fontFamily: 'Parkinsans-Regular',
    fontSize: 11,
  },

  wannaSignUp: {
    color: '#ebebebff',
    fontFamily: 'Parkinsans-Regular',
    fontSize: 11,
  }
});