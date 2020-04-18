import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import links from "../../configs/links";
import commons from "../../styles/commons";
import colors from "../../configs/colors";


class Categories extends React.Component {
    render() {
        return (
            <ScrollView style={commons.container}>
                <Text style={styles.title}>Categories</Text>
                <View style={styles.categoryContainer}>
                    {[1, 2, 3, 4, 5, 6, 7, 8,9].map(c => {
                        return (
                            <View style={styles.category}>
                                <Image style={styles.image} source={{uri: links.category}} resizeMode='cover'/>
                                <Text style={styles.categoryText}>Milk</Text>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        padding: 10,
        color: colors.dark,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 12,
        borderColor:colors.primary,
        borderWidth: 1,
    },
    category: {
        padding: 10,
        width: "50%",
        borderRadius: 12,
    },
    categoryText: {
        padding: 10,
        fontSize: 18,
        color: colors.primary,
        textAlign: 'center'
    }
});

export default Categories;
