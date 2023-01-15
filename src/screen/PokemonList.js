import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions, Image, Button } from "react-native";
import  {COLORS} from "../utils/color";
import {STRINGS} from '../utils/strings'
import { GetPokemonList } from "../redux/action";
import { getPokemonImageUrl } from "../utils/utils";
import { useDispatch, useSelector } from "react-redux";
const { width } = Dimensions.get("screen");

const PokemonList=(props)=> {
    const [loader, setLoader] = useState(true);
    const [showError, setShowError] = useState(false);
    const [paginationLimit, setLimit] =useState(10)
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.data.pokemon_list);

    useEffect(() => {
        DataInitializer(`${STRINGS.API}?limit=10`);
    }, [])

    function DataInitializer(url) {
        setLoader(true);
        dispatch(GetPokemonList(url)).then(response => {
            setLoader(false);
        }).catch(error => {
            setLoader(false);
            setShowError(true);
        })
    }
    function showPokemonCard(item) {
        let url = getPokemonImageUrl(item.url);
        return <View elevation={2} style={styles.pokemon_card}>
            <Image source={{ uri: url }}
             style={styles.pokemon_image} resizeMode='center' />
            <Text style={styles.pokemon_title}>{item.name}</Text>
            <Button title={STRINGS.VIEW}
             onPress={() => props.navigation.navigate("PokemonDetail", { data: { url: item.url, image: url } })} 
            style={styles.view_button}/>
              
        </View>
    }
    function renderBottom() {
        return <View elevation={2} style={styles.pagination_container}>
            {pokemonList.previous != null ? <Button title={STRINGS.PREVIOUS}
             onPress={() => serviceInitializer(pokemonList.previous)} 
            style={styles.pagination_button}/>
               
            : null}
            {pokemonList.next != null ? <Button title={STRINGS.NEXT} 
            onPress={() => serviceInitializer(pokemonList.next)} 
            style={styles.pagination_button}/>
           : null}
        </View>
    }
    if (loader) {
        return <View style={styles.loader}>
            <ActivityIndicator size={STRINGS.LARGE} color={COLORS.textColor} />
        </View>
    }
    if (showError) {
        return <View style={styles.loader}>
            <Text style={styles.error}>{STRINGS.LIST_FETCH_ERROR}</Text>
        </View>
    }
    return (
        <View style={styles.Main_container}>
            <FlatList
                data={pokemonList?.results}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => showPokemonCard(item)}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={() => renderBottom()}
                numColumns={2}
                 />
        </View>
    )
}

export default PokemonList

const styles = StyleSheet.create({
    Main_container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    loader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    error: {
        textAlign: "center",
        padding: 10
    },
    pokemon_card: {
        width: width / 2.5,
        backgroundColor: COLORS.white,
        margin: 5,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    pokemon_title: {
        fontSize: 16,
        padding: 10
    },
    pokemon_image: {
        width: 100,
        height: 100
    },
    view_button: {
        width: "60%",
        height: 30
    },
   
    pagination_container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    pagination_button: {
        width: width / 3.5,
        height: 35,
        marginHorizontal: 5,
        backgroundColor: COLORS.textColor
    }
})
