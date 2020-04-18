import React from 'react';
import {View, StyleSheet} from "react-native";
import {SearchBar} from "react-native-elements";
import colors from "../../configs/colors";


class FuseSearchBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.box}>

                <SearchBar
                    placeholder='Search...'
                    containerStyle={styles.searchContainer}
                    inputStyle={styles.search} platform={"android"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        width:'100%',
        padding:12,
        marginTop:-2,
        backgroundColor:colors.primary,
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
    },
    search:{
        width:'80%',
    },
    searchContainer:{
        borderRadius:12,
    }

})

export default FuseSearchBar;
