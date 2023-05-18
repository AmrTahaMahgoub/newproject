import React from 'react';
import { View } from 'react-native';
import Svgs from './src/assets/svgs';

const App=()=>{
    return (
        <View style={{margin:100}}>
            <Svgs name="Heart"
 style={{backgroundColor:"red"}} >
        </Svgs>
      
        </View>
    );
}
export default App;