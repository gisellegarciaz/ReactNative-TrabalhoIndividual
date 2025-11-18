import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';
import { TabRouters } from './tabRouters';


const Stack = createStackNavigator();

export const StackRouters = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StackLogin" component={Login} />
            <Stack.Screen name="StackHome" component={TabRouters} />
            {/* <Stack.Screen name="StackSettings" component={Settings} /> */}
        </Stack.Navigator>
    )
};

