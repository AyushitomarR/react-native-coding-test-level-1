import React from "react";
import { Button, View } from "react-native";
import { STRINGS } from '../utils/strings'

const Main = ({navigation}) => {

    return (

        <View style={{ flex: 1 }}>

            <Button title={STRINGS.CONTACT_US}
                onPress={() => navigation.navigate('UserForm')} />

        </View>
    )
}


export default Main
