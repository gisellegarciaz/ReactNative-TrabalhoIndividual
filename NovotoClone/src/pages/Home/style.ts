import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f81818ff',
    marginTop: 30,
  },

  header: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#e8ebf3ff',
    gap: 5,
    paddingBottom: 15
  },

  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },

  profileInfo1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  UserPerfilImage: {
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: '#ffffffff',
  },

  greetingText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Parkinsans-Bold',
  },

  profileInfo2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  sectionTitle: {
    fontSize: 17,
    color: '#8f8f8fff',
    fontFamily: 'Parkinsans-SemiBold',
  },

  selectButton: {
    backgroundColor: '#fafafaff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },

  selectButtonText: {
    fontSize: 10,
    color: '#333',
    fontFamily: 'Parkinsans-SemiBold',

  },

  scrollViewContent: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#e8ebf3ff',
  },

  // bottomTabBar: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   height: 65,
  //   backgroundColor: '#fff',
  //   borderTopWidth: 1,
  //   borderTopColor: '#ccc',
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: -2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 2,
  //   elevation: 10,
  // },

});

