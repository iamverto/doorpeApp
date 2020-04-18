import React from "react";
import {Text, StyleSheet, View} from "react-native";
import colors from "../../configs/colors";
import {Button, Icon} from "react-native-elements";

class FuseTag extends React.Component {
    render() {
        const {title, onRemove} = this.props;
        return (
            <View style={styles.tag}>
                <Text>{title}</Text>

                {onRemove!==undefined &&
                <Button icon={
                    <Icon
                        name="remove"
                        size={16}
                        color="white"
                    />}
                        onPress={()=>onRemove()}
                        buttonStyle={styles.button}/>}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    tag: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 16,
        borderColor: colors.primary,
        marginTop: 5,
        marginLeft: 5,
        flexDirection: 'row'
    },
    button: {
        justifyContent: 'center',
        borderRadius: 100,
        padding: 0,
        backgroundColor: colors.danger,
        marginLeft: 5
    }
});

export default FuseTag;
