// components/cardStyle.ts
import { StyleSheet } from "react-native";

export const cardStyle = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        marginHorizontal: 15,
        marginBottom: 15,
        shadowColor: '#020202e1'
    },

    productHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 5,
    },

    productTitle: {
        fontSize: 18,
        flex: 1,
        marginRight: 10,
        color: '#343434ff',
        fontFamily: 'Parkinsans-SemiBold'
    },

    productCategory: {
        fontSize: 12,
        marginBottom: 7,
        color: '#c8c8c8ff',
        fontFamily: 'Parkinsans-Regular'
    },

    guaranteeOptions: {
        marginTop: 10,
        marginBottom: 10,
        gap: 8,
        alignItems: 'center'
    },

    guaranteeButtonPrimary: {
        backgroundColor: '#233d72ff',
        width: '55%',
        paddingVertical: 22,
        borderRadius: 8,
        alignItems: 'center'
    },

    guaranteeButtonText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'Parkinsans-Semibold'
    },

    guaranteeButtonSecondary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '55%',
        height: 70,
        padding: 15,
        paddingRight: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#233d72ff',
        borderStyle: 'dashed',
    },

    guaranteeButtonTextSecondary: {
        color: '#233d72ff',
        fontSize: 12,
        fontFamily: 'Parkinsans-Semibold',
    },

    viewTextSecondary: {
        width: 100
    },

    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
    },

    dateItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3,
        fontFamily: 'Parkinsans-Regular',
        
    },

    dateText: {
        fontSize: 10.5,
        color: '#666',
        fontFamily: 'Parkinsans-Regular',
    },
});