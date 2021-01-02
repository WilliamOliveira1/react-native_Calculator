import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native'

import Display from './components/Display'
import Button from './components/Button'

export default  class App extends Component {

    state= {
        displayValue: '0'
    }

    addDigit = n => {
        this.setState({ displayValue: n}) //This will set the value of the button on display
    }

    clearMemory = () => {
        this.setState({ displayValue: '0'}) // This will clear the value on display and set 0 
    }

    setOperation = operation => {

    }

    render() {
        return  (
            <View style={styles.container}>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                    <Button label='AC' triple onClick={this.clearMemory}/>
                    <Button label='/' operation onClick={this.setOperation}/>
                    <Button label='7' onClick={this.addDigit}/>
                    <Button label='8' onClick={this.addDigit}/>
                    <Button label='9' onClick={this.addDigit}/>
                    <Button label='*' operation onClick={this.setOperation}/>
                    <Button label='4' onClick={this.addDigit}/>
                    <Button label='5' onClick={this.addDigit}/>
                    <Button label='6' onClick={this.addDigit}/>
                    <Button label='-' operation onClick={this.setOperation}/>
                    <Button label='1' onClick={this.addDigit}/>
                    <Button label='2' onClick={this.addDigit}/>
                    <Button label='3' onClick={this.addDigit}/>
                    <Button label='+' operation onClick={this.setOperation}/>
                    <Button label='0' double onClick={this.addDigit}/>
                    <Button label='.' onClick={this.addDigit}/>
                    <Button label='=' operation onClick={this.setOperation}/>
                </View>        
            </View>
        )
    }
}

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