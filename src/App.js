import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native'

import Button from './components/Button'

export default () => {
 
    return  (
    <SafeAreaView style={styles.container}>
        <View style={styles.buttons}>
            <Button label='AC'/>
            <Button label='/'/>
            <Button label='7'/>
            <Button label='8'/>
            <Button label='9'/>
            <Button label='*'/>
            <Button label='4'/>
            <Button label='5'/>
            <Button label='6'/>
            <Button label='-'/>
            <Button label='1'/>
            <Button label='2'/>
            <Button label='3'/>
            <Button label='+'/>
            <Button label='0'/>
            <Button label='.'/>
            <Button label='='/>
        </View>        
    </SafeAreaView>
)}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection:'row', //This set the buttons on row 
        flexWrap: 'wrap', //This set when the buttons cover all the width the next button go to the next row
    }
})


/*
*Comando CMD para rodar o emulador android: 
npx react-native start
npx react-native run-android

?Se não rodar deletar arquivo json que fica na pasta: \android\app\build\intermediates\signing_config\debug\out
?E rodar os comandos novamente
*/