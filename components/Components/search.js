import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

export default class search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText(newText){
        const {onChange} = this.props;

        this.setState({
            text: newText,
        }, () => {
            onChange && onChange(newText);
        });
    }

    render() {

        const {text} = this.state;

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={text}
                    placeholder="Search Artist ..."
                    placeholderTextColor="white"
                    onChangeText={newText => this.handleChangeText(newText)}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        marginTop: 10,
        marginBottom: 10,
        fontSize:20,
        textAlign: "center",
        color:"white"
    },
    input: {
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 20,
        height: 50,
        padding: 10,
        marginVertical:10,
        marginHorizontal:30,
        fontSize:15,
        color:"white"
    },
    container: {
        backgroundColor: 'black',
    },
})