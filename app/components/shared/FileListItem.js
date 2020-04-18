import React from "react";
import {Image, Text, View ,StyleSheet} from "react-native";
import {Card} from "react-native-elements";
import colors from "../../configs/colors";

class FileListItem extends React.Component{
    render() {
        const {style} = this.props;
        return(
            <View style={[styles.fileContainer, style]}>
                <View style={styles.fileIcon}>
                    <Image
                        style={styles.fileImage}
                        resizeMode="cover"
                        source={{uri: "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg"}}
                    />

                </View>
                <View style={styles.fileMeta}>
                    <Text style={styles.fileMetaTitle}>PB NOTES</Text>
                    <Text style={styles.fileMetaSubtitle}>12MB</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    fileContainer:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        borderColor:colors.border,
        height: 64,
        marginTop:5,
        marginBottom:5,
    },
    fileIcon:{
        flex:1,
        justifyContent:'center',
        padding:5
    },
    fileImage:{
        flex:1,
        width: '100%',
        height: 64,
        borderRadius: 4,
    },
    fileMeta:{
        padding:5,
        flex:4,
        justifyContent: 'space-around'
    },
    fileMetaTitle:{
        fontWeight: '400',
        fontSize: 14,
        color:colors.primary
    },
    fileMetaSubtitle:{
        fontWeight:'300',
        color:colors.dark2
    },

});

export default FileListItem;
