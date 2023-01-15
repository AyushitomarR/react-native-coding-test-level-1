import React from "react";
import { Button, View } from "react-native";
import { STRINGS } from '../utils/strings'

const Main = ({ navigation }) => {

    return (

        <View style={{ flex: 1 }}>

            <Button title={STRINGS.CONTACT_US}
                onPress={() => navigation.navigate('UserForm')} />

            <View style={{ marginTop: 10 }}>
                <Button title={STRINGS.VIEW_CATALOG}
                    onPress={() => navigation.navigate('PokemonList')} />
            </View>

        </View>
    )
}


export default Main
