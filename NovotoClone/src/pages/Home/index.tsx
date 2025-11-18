import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { style } from './style'; // Seus estilos
import CardListaNotasFiscais from '../../components/CardListaNotasFiscais'; // O componente que vamos criar
import { Ionicons } from '@expo/vector-icons';
import UserPerfil from '../../assets/ImagemPerfilDefault.png';

export function Home() {

  type ProductData = React.ComponentProps<typeof CardListaNotasFiscais>;

  const products: ProductData[] = [
    {
      productName: "Fogão 4 Bocas Electrolux FE4GS",
      productCategory: "Utilidades domésticas",
      productLocation: "Cozinha",
      purchaseDate: "19/03/2025",
      warrantyExpirationDate: "19/03/2026"
    },
    {
      productName: "Refrigerador Electrolux Multidoor 590L",
      productCategory: "Eletrodomésticos",
      productLocation: "Cozinha",
      purchaseDate: "10/01/2024",
      warrantyExpirationDate: "10/01/2025"
    },
    {
        productName: "Microondas Electrolux MTD30",
        productCategory: "Eletrodomésticos",
        productLocation: "Cozinha",
        purchaseDate: "05/08/2025",
        warrantyExpirationDate: "05/08/2026"
    },
    {
        productName: "MacBook Air (M1, 2020) 8GB/256GB",
        productCategory: "Eletrônicos/Informática",
        productLocation: "Escritório",
        purchaseDate: "15/02/2024",
        warrantyExpirationDate: "15/02/2025"
    },
    {
        productName: "Smart TV 75\" 4K HDR TCL P735",
        productCategory: "Eletrônicos/TV",
        productLocation: "Sala de Estar",
        purchaseDate: "20/03/2025",
        warrantyExpirationDate: "20/03/2026"
    },
    {
        productName: "JBL Soundbar Cinema SB180 2.1 Canais + Subwoofer 6.5 Sem Fio",
        productCategory: "Eletrônicos/Áudio",
        productLocation: "Sala de Estar",
        purchaseDate: "20/03/2025",
        warrantyExpirationDate: "20/03/2026"
    },
  ]

  return (
    <View style={style.container}>

      <View style={style.header}>

        <View style={style.profileInfo}>
          <View style={style.profileInfo1}>
            <Image source={UserPerfil} style={style.UserPerfilImage} />
            <Text style={style.greetingText}>Olá, Giselle</Text>
          </View>
          <Ionicons name="notifications-outline" size={38} color="#e63d00ff" />
        </View>

        <View style={style.profileInfo2}>
          <Text style={style.sectionTitle}>Seus produtos</Text>
          <TouchableOpacity style={style.selectButton}>
            <Text style={style.selectButtonText}>Selecionar</Text>
          </TouchableOpacity>
        </View>

      </View>


      <ScrollView style={style.scrollViewContent}>

        {products.map((product, index) => (
          <CardListaNotasFiscais
            key={index}
            {...product}
          />
        ))}

      </ScrollView>

      {/* <View style={style.bottomTabBar} /> */}


    </View>
  );
}
