import React from 'react';
import {View, StyleSheet} from "react-native";
import {Button, Icon, SearchBar} from "react-native-elements";
import colors from "../../configs/colors";


class FilterBar extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.box}>
                <Button titleStyle={styles.buttonTitle} title='filter' type='clear' icon={
                    <Icon name='ios-color-filter' color={colors.primary} type='ionicon'/>
                }
                />
                <Button titleStyle={styles.buttonTitleDark} title='sort' type='clear' icon={
                    <Icon name='sort' color={colors.dark} type='font-awesome'/>
                }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    box:{
        width:'100%',
        padding:5,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:colors.primary
    },
    search:{
        width:'80%',
    },
    searchContainer:{
        borderRadius:12,
    },
    buttonTitle:{
        color:colors.primary,
        paddingLeft:10,
    },
    buttonTitleDark:{
        color:colors.dark,
        paddingLeft:10,
    }

})

export default FilterBar;
