import { StyleSheet } from 'react-native';

export const PRIMARY_COLOR = '#FF5733';
export const INACTIVE_COLOR = '#888888';
export const BACKGROUND_COLOR = '#fff';

export const styles = StyleSheet.create({
    tabBarContainer: {
        flexDirection: 'row',
        backgroundColor: BACKGROUND_COLOR,
        height: 80,
        paddingBottom: 19,    
        shadowColor: '#000000e8',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 10
    },

    tabItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabText: {
        fontSize: 11.5,
        marginTop: 1,
        marginBottom: 5,
        fontFamily: 'Parkinsans-Regular'
    },
    
    centralButtonWrapper: {
        width: 70, 
        height: 70, 
        marginTop: -20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centralButton: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
});