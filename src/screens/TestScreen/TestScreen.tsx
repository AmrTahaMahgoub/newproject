import { View } from "react-native";
import React from "react";
import ViewRow from "../../components/atoms/ViewRow/ViewRow";
import Text from "../../components/atoms/Text/Text";


function TestScreen(){
    return(<View>
        <ViewRow>
            <Text style={{backgroundColor:"red"}}>
                hello
            </Text>
            <Text>world</Text>
        </ViewRow>
    </View>)
}
export default TestScreen;