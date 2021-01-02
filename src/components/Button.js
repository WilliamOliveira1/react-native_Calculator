import React from 'react';
import { 
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
    View} from 'react-native'

export default props => {
    const stylesButton = [styles.button] // set the primary style for button
    if(props.double) stylesButton.push(styles.buttonDouble) // if double set on import file the style will change to buttonDouble
    if(props.triple) stylesButton.push(styles.buttonTriple) // if double set on import file the style will change to buttonTriple
    if(props.operation) stylesButton.push(styles.operationButton) // if double set on import file the style will change to operationButton

    return (
        <TouchableHighlight 
        onPress={() => props.onClick(props.label)}>
                <Text style={stylesButton}>{props.label}</Text>   
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
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

/*
?label will be set on the App.js or other file that import the Button.js file
?onCLick will be set on the App.js or other file that import the Button.js file
*/