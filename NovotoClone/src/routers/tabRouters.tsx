import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
import { View } from 'react-native';
import CustomTabBar from '../components/CustomTabBar.tsx';


const Tab = createBottomTabNavigator();

export const TabRouters = () => {

    return (
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { position: 'absolute' } }} tabBar={(props) => <CustomTabBar {...props} />}>


            <Tab.Screen
                component={Home}
                name="TabHome"
                // options={{
                //     title: 'Produtos'
                // }}
                />

            <Tab.Screen
                component={Home}
                name="TabHome1"
                // options={{
                //     title: 'Serviços'
                // }}
                />

            <Tab.Screen
                component={Home}
                name="TabHome2"
                // options={{
                //     title: ''
                // }}
                />

            <Tab.Screen
                component={Home}
                name="TabHome3"
                // options={{
                //     title: 'Perfil'
                // }}
                />

            <Tab.Screen
                component={Home}
                name="TabHome4"
                // options={{
                //     title: 'Menu'

                // }} 
                />


        </Tab.Navigator>
    )
};