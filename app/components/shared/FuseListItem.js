import React from "react";
import {StyleSheet} from "react-native";
import {Avatar, Button, ListItem} from "react-native-elements";
import colors from "../../configs/colors";
import {sub} from "react-native-reanimated";

class FuseListItem extends React.Component {



    render() {
        const {
            title,
            subtitle,
            avatar,
            badgeValue,
            badgeStatus,
            chevron,
            bottomDivider,
            rightElement,
            onPress
        } = this.props;
        return (
            <ListItem
                onPress={onPress}
                title={title || false}
                subtitle={subtitle && subtitle}
                leftAvatar={
                    avatar === undefined ? false :
                        {
                            source: {
                                uri: avatar
                            }
                        }
                }
                bottomDivider={bottomDivider||false}
                chevron={chevron || false}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                containerStyle={styles.container}
                badge={badgeValue === undefined ? false : {value: badgeValue, status: badgeStatus}}
                rightElement={rightElement || false }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
        color: colors.dark,
        paddingLeft: 10,
    },
    subtitle: {
        paddingLeft: 10,
        paddingTop: 5
    }
});

export default FuseListItem;
