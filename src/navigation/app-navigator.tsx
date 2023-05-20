import React from 'react';

import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import { StackNavigatorParamList } from './types';
import { TemplateOne, TemplateThree, TemplateTwo } from '../screens';


const Stack = createNativeStackNavigator<StackNavigatorParamList>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name="TemplateOne" component={TemplateOne} />
      <Stack.Screen name="TemplateTwo" component={TemplateTwo} />
      <Stack.Screen name="TemplateThree" component={TemplateThree} />



    </Stack.Navigator>
  );
}
