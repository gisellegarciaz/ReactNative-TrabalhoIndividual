import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { cardStyle } from './styles';


interface ProductCardProps {
    productName: string;
    productCategory: string;
    productLocation: string;
    purchaseDate: string;
    warrantyExpirationDate: string;
}

const CardListaNotasFiscais: React.FC<ProductCardProps> = ({
    productName,
    productCategory,
    productLocation,
    purchaseDate,
    warrantyExpirationDate,
}) => {
    
    return(

<View style={cardStyle.cardContainer}>

            <View style={cardStyle.productHeader}>
                <Text style={cardStyle.productTitle}>{productName}</Text>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-horizontal" size={24} color="#333" />
                </TouchableOpacity>
            </View>
            
            <Text style={cardStyle.productCategory}>Categoria: {productCategory}</Text>
            <Text style={cardStyle.productCategory}>Ambiente: {productLocation}</Text>
            
            <View style={cardStyle.guaranteeOptions}>
                <TouchableOpacity style={cardStyle.guaranteeButtonPrimary}>
                    <Text style={cardStyle.guaranteeButtonText}>Garantia de fábrica</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={cardStyle.guaranteeButtonSecondary}>
                    <View style={cardStyle.viewTextSecondary}>
                    <Text style={cardStyle.guaranteeButtonTextSecondary}>Possui garantia estendida?</Text>
                    </View>
                    <Ionicons name="arrow-forward" size={16} color="#233d72ff" />
                </TouchableOpacity>

                <TouchableOpacity style={cardStyle.guaranteeButtonPrimary}>
                    <Text style={cardStyle.guaranteeButtonText}>Garantia total</Text>
                </TouchableOpacity>

                <TouchableOpacity style={cardStyle.guaranteeButtonSecondary}>
                    <Text style={cardStyle.guaranteeButtonTextSecondary}>Possui seguro?</Text>
                    <Ionicons name="arrow-forward" size={16} color="#233d72ff" />
                </TouchableOpacity>
            </View>
            

            <View style={cardStyle.cardFooter}>
                <View style={cardStyle.dateItem}>
                    <Ionicons name="cart-outline" size={16} color="#333" />
                    <Text style={cardStyle.dateText}>Compra {purchaseDate}</Text>
                </View>
                <View style={cardStyle.dateItem}>
                    <Ionicons name="checkmark-circle-outline" size={16} color="#333" />
                    <Text style={cardStyle.dateText}>Garantido até {warrantyExpirationDate}</Text>
                </View>
            </View>
        </View>

    )

};

export default CardListaNotasFiscais;
