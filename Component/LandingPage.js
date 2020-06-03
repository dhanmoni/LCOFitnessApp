import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { setName } from '../Redux/redux/actions/mainAction'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class LandingPage extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            isError: false
        }
    }
    render() {
        console.log(this.props.main)
        return (
            <ScrollView style={styles.MainView}>
                <View style={styles.logoView}>
                    <Image source={require('../Images/logo.png')} style={styles.logoImage} />
                </View>
                <Text style={styles.hey}>Hey Stranger!</Text>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.text1}>Please enter your name to continue :</Text>
                <TextInput
                    value={this.state.name}
                    onChangeText={(name) => {

                        this.setState({ name })
                        console.log(this.state.name.length)
                    }}
                    style={styles.textInput1}
                    underlineColorAndroid="transparent"
                    selectionColor='#BD21D9'
                />
                {this.state.isError ? (
                    <Text style={styles.error}>Please Enter Your Name!</Text>
                ) : null}
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => {
                        this.state.name.length <= 1 ? this.setState({ isError: true }) : this.props.setName(this.state.name)
                    }}
                >
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}
const mapStateToProps = state => {
    return {
        main: state.main
    }
}
const styles = StyleSheet.create({
    MainView: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 10,

    },
    logoView: {
        height: windowHeight / 3,
        width: windowWidth - 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    logoImage: {
        height: 100 + '%',
        width: 100 + '%'
    },
    hey: {
        fontSize: 38,
        color: '#000',
        textAlign: 'center',
        paddingTop: 20,
        fontFamily: "Poppins-Bold"
    },
    welcome: {
        fontSize: 28,
        color: '#1a1a1a',
        fontFamily: "Poppins-Medium",
        textAlign: 'center',
        paddingTop: 10,
        marginBottom: 20
    },
    text1: {
        fontSize: 18,
        color: '#1a1a1a',
        fontFamily: "Poppins-Regular",
        marginLeft: 10,
        paddingTop: 10
    },
    textInput1: {
        padding: 8,
        fontSize: 22,
        fontFamily: "Poppins-Regular",
        paddingLeft: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#BD21D9',
    },
    nextButton: {
        backgroundColor: '#BD21D9',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    nextButtonText: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: "Poppins-Regular"

    },
    error: {
        fontSize: 14,
        color: 'red',
        fontFamily: "Poppins-Italic",
        padding: 0,
        marginLeft: 20
    }


})

export default connect(mapStateToProps, { setName })(LandingPage)

