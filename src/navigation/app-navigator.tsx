import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import { StackNavigatorParamList } from './types';
import { TemplateOne, TemplateThree, TemplateTwo } from '../screens';
import Test from '../screens/Test/test';
import Template4 from '../screens/home/Template4/Template4';


const Stack = createStackNavigator<StackNavigatorParamList>();

export function AppStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}  initialRouteName="Test">
 {/* <Stack.Screen name="Test" component={Test} /> */}
      {/* <Stack.Screen name="TemplateOne" component={TemplateOne} />  */}
       {/* <Stack.Screen name="TemplateTwo" component={TemplateTwo} /> */}
      {/* <Stack.Screen name="TemplateThree" component={TemplateThree} /> */}
      <Stack.Screen name="TemplateFour" component={Template4} />



    </Stack.Navigator>
  );
}
