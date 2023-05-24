import React, { FC, memo } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import MainNavigator from './src/navigation';
import { TemplateOne, TemplateTwo } from './src/screens';
import { Colors } from './src/styles';


function App () {
    return (
       

    
<SafeAreaView style={{flex: 1}}>
<StatusBar backgroundColor={Colors.GRAY_F5F5F5} />
<MainNavigator />
</SafeAreaView>
       
    );
}
export default App;