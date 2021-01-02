import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native'

import Display from './components/Display'
import Button from './components/Button'


const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [ 0 , 0 ],
    current: 0,
}

export default  class App extends Component {

    state= { ...initialState}

    addDigit = n => {  //*This will set the value of the button on display
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay //*This will change the first value that will be input different than zero and avoid multiple zeros
        if(n === '.' && this.state.displayValue.includes('.') && !clearDisplay) { //* This if will avoid user input more than one dot each input
            return
        } 
        
        const currentValue = clearDisplay ? '' : this.state.displayValue //* This will set the current value in the display
        const displayValue = currentValue + n //* This will concatenate the value input with the current value
        this.setState({ displayValue, clearDisplay: false }) //* This will set the value on the display

        if(n !== '.') { //* This will verify if the input is a valid number
            const newValue = parseFloat(displayValue) //* This will set a float value of the displayValue
            const values = [...this.state.values] //* Get the array refresh values [... this 3 dots create a clone of the variable set]
            values[this.state.current] = newValue //* saving the value in the array
            this.setState({ values})
        }
    }

    clearMemory = () => {
        this.setState({ ...initialState}) //* This will clear the value on display and set 0 
    }

    setOperation = operation => {
        if(this.state.current === 0 ) {
            this.setState({ operation, current: 1, clearDisplay: true })
        }else {
            const equals =  operation === '='
            const values = [...this.state.values]
            try {                 
                if(this.state.operation === '/' && values[1] === 0) {
                    values[0] = "Can't divide by zero"
                    console.warn("Can't divide by zero")
                }else {
                    values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)
                }
            }
            catch{
                console.warn('Ocorreu um erro durante a operação')
                values[0] = this.state.values[0]
            }

            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values,
            })
        }
    }

    render() {
        return  (
            <View style={styles.container}>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                    <Button label='AC' triple onClick={this.clearMemory}/>
                    <Button label='÷' operation onClick={this.setOperation}/>
                    <Button label='7' onClick={this.addDigit}/>
                    <Button label='8' onClick={this.addDigit}/>
                    <Button label='9' onClick={this.addDigit}/>
                    <Button label='X' operation onClick={this.setOperation}/>
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