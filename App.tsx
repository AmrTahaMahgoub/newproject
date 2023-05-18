import React from 'react';
import { Text, View } from 'react-native';
import Svgs from './src/assets/svgs';
import { Typography } from './src/styles';

const App=()=>{
    return (
        <View style={{margin:100,justifyContent:"flex-start"}}>
<Text style={{
    fontFamily:Typography.BOLDROBOTO,
   // fontSize:Typography.FS12
}}>Holding the fifteenth meeting of the Board of Directors Enterprise</Text>
<Text style={{
    fontFamily:Typography.THINLATO,
   // fontSize:Typography.FS16
}}>Holding the fifteenth meeting of the Board of Directors Enterprise</Text>
      
        </View>
    );
}
export default App;