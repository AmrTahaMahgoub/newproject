import React, { FC, memo } from 'react';
import { View } from 'react-native';

import MainNavigator from './src/navigation';
import { TemplateOne } from './src/screens';

function App () {
    return (
       
        <View>
            <TemplateOne />
        </View>

       
    );
}
export default App;