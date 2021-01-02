import React from 'react';
import { 
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
    View} from 'react-native'

export default props => {

    return (
        <TouchableHighlight onPress={props.onClick}>
            <Text style={styles.button}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 4, //This set the value of the height to 1/4 of the width value
        width: Dimensions.get('window').width / 4, //This set the value of the width to 1/4 of the width value
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    }
})

/*
?label will be set on the App.js or other file that import the Button.js file
?onCLick will be set on the App.js or other file that import the Button.js file
*/