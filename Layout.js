import React, { Component } from 'react';
import { } from 'react-native';
import { connect } from 'react-redux'
import { LandingStack, MainStack } from './Router/router';

class Layout extends Component {
    render() {
        let { main } = this.props
        if (main.user_name != '') {
            return (
                <MainStack />
            )
        }
        else {
            return (
                <LandingStack />
            )
        }


    }
}

const mapStateToProps = state => {
    return {
        main: state.main
    }
}
export default connect(mapStateToProps)(Layout)