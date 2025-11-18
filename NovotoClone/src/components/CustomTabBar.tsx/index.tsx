import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { styles, PRIMARY_COLOR, INACTIVE_COLOR } from './styles';


const iconMap: { [key: string]: string } = {
    TabHome: 'home-outline', 
    TabHome1: 'construct-outline',
    TabHome2: 'add',
    TabHome3: 'person-outline',
    TabHome4: 'menu-outline',
};

const labelMap: { [key: string]: string } = {
    TabHome: 'Produtos',
    TabHome1: 'Serviços',
    TabHome2: '',
    TabHome3: 'Perfil',
    TabHome4: 'Menu',
};


const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

    return (
        <View style={styles.tabBarContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const isCentralButton = route.name === 'TabHome2';

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const color = isFocused ? PRIMARY_COLOR : INACTIVE_COLOR;

                if (isCentralButton) {
                    return (
                        <TouchableOpacity
                            key={route.key}
                            accessibilityRole="button"
                            onPress={onPress}
                            style={styles.centralButtonWrapper}
                        >
                            <View style={styles.centralButton}>
                                <Ionicons name="add" size={40} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    );
                }

                const iconName = iconMap[route.name];

                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        onPress={onPress}
                        style={styles.tabItem}
                    >

                        <Ionicons
                            name={isFocused && route.name === 'TabHome' ? 'home' : (iconName as any)}
                            size={26}
                            color={color}
                        />
                        <Text style={[styles.tabText, { color }]}>
                            {labelMap[route.name]}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;