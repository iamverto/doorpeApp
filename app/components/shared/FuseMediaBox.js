import React from "react";
import {View, Text, StyleSheet, Dimensions} from "react-native";
import colors from "../../configs/colors";
import FileListItem from "./FileListItem";

/*
* media type
*  image - display thumbnail
*  file - display thumbnail with filename
*  video - display thumbnail
* */

class FuseMediaBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mediaContents: [
                {id: 1, type: 'image', date: 1},
                {id: 2, type: 'image', date: 1},
                {id: 2, type: 'image', date: 1},
                {id: 2, type: 'image', date: 1},
                {id: 3, type: 'image', date: 1},
                {id: 4, type: 'image', date: 1},
                {id: 5, type: 'image', date: 1},
                {id: 6, type: 'file', date: 2},
                {id: 7, type: 'image', date: 2},
                {id: 8, type: 'image', date: 2},
            ]
        }
    }

    render() {
        const {mediaContents, styles} = this.state;
        return (
            <View style={[styles.container, styles]}>
                {this.state.mediaContents.map((media, index) => {
                    let dateChange = false;
                    let isFile = false;
                    if(media.type==='file') isFile = true;
                    if (index > 0 && mediaContents[index - 1].date !== mediaContents[index].date) dateChange = true;
                    //for first
                    if (index === 0) dateChange = true;
                    return (
                        [
                            dateChange && <Text style={styles.dateBar}>date changed</Text>,
                            <View style={[styles.media, isFile && styles.file]}>
                                {isFile && <FileListItem/>}

                            </View>
                        ]
                    )
                })}
            </View>
        )
    }
}

const devideWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    dateBar: {
        height: 20,
        width: devideWidth,
        backgroundColor: colors.dark2,
    },
    media: {
        height: Math.round(devideWidth/3),
        width: Math.round(devideWidth/3),
        backgroundColor: colors.primary
    },
    file:{
        width:devideWidth,
        height:72,
        backgroundColor:colors.background,
    }
});

export default FuseMediaBox;
