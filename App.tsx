

import React, { FC, memo } from 'react';

import ViewRow from './src/components/atoms/ViewRow/ViewRow';

import { Spacing } from './src/styles';
import Text from './src/components/atoms/Text/Text';
import { Accordion, helpItemTypes } from './src/components/atoms/Accordion/Accordion';
import { FlatList, View } from 'react-native';
import { Line } from './src/components/atoms/Line';
import Svgs from './src/assets/svgs';
import { Loader } from './src/components/atoms/Loader/Loader';
import { Button } from './src/components/atoms/Button/Button';
import { getHeight } from './src/styles/dimensions';
import { GradientView } from './src/components/atoms/GradientView';
import Image from './src/components/atoms/Image/Image';
import { images } from './src/assets/imgs';
import AnimatedImage from './src/components/atoms/AnimatedImage/AnimatedImage';
import { useSharedValue } from 'react-native-reanimated';
import { ViewBox } from './src/components/atoms/ViewBox';







type HelpProps = {
    helpList: "amr"
}
const App = () => {
    const y = useSharedValue(0)
    return (

 <ViewBox >
    <Text>amr</Text>
    <Text>amr</Text>
    <Text>amr</Text>
 </ViewBox>

       

    );
}



export default App;
