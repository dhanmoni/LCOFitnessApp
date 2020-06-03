import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setAllWorkout, setDaywiseWorkout, setNormalWorkout } from '../Redux/redux/actions/mainAction'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export class HomePage extends Component {

    constructor() {
        super();
        this.state = {
            all_workout: [
                { name: 'Bench Press', time: '2 Minutes', image: require('../Images/bench_press.png') },
                { name: 'Bicep Dumbell Curl', time: '3 Minutes', image: require('../Images/bicep_bumbell_curl.png') },
                { name: 'Crunches', time: '2 Minutes', image: require('../Images/crunches.png') },
                { name: 'Excercise Ball Pushup', time: '2 Minutes', image: require('../Images/excercise_ball_pushup.png') },
                { name: 'Incline Bench Press', time: '3 Minutes', image: require('../Images/incline_benchpress.png') },
                { name: 'Incline Crunches', time: '2 Minutes', image: require('../Images/incline_crunches.png') },

                { name: 'Leg Lift', time: '4 Minutes', image: require('../Images/leglift.png') },
                { name: 'Machine Shoulder Press', time: '2 Minutes', image: require('../Images/machine_shoulder_press.png') },
                { name: 'Pushup', time: '5 Minutes', image: require('../Images/pushup.png') },
                { name: 'Seated Rowing', time: '5 Minutes', image: require('../Images/seated_rowing.png') },
                { name: 'Side Bends', time: '4 Minutes', image: require('../Images/side_bend.png') },
                { name: 'Sit-ups', time: '4 Minutes', image: require('../Images/situp.png') },
                { name: 'Tree Pose', time: '3 Minutes', image: require('../Images/tree_pose.png') },
                { name: 'Weighted Pushups', time: '4 Minutes', image: require('../Images/weighted_pushup.png') }

            ]
        }
    }
    componentDidMount() {
        this.props.setAllWorkout(this.state.all_workout)
        this.props.setDaywiseWorkout()
        this.props.setNormalWorkout()
    }


    render() {

        return (
            <View style={styles.main}>
                <View style={styles.section1}>
                    <Text style={styles.greet1}>Hi {this.props.main.user_name}</Text>
                    <Text style={styles.greet2}>Good morning</Text>
                    <Text style={styles.date}>10th April 2020</Text>
                </View>
                <View style={styles.section2}>
                    <Text style={styles.ready}>Ready to</Text>
                    <Text style={styles.ready}>Start?</Text>
                    <Text style={styles.inst}>Select one of the following workout mode to get started...</Text>
                    <TouchableOpacity
                        style={styles.mode}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('NormalWorkout')}
                    >
                        <Text style={styles.modetext}>Normal workout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.mode}
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('DaywiseWorkout')}
                    >
                        <Text style={styles.modetext}>Day-Wise workout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    main: state.main
})
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#f3f7ff',
        flex: 1
    },
    section1: {
        backgroundColor: '#fff',

        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 30
    },
    greet1: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#1a1a1a90'
    },
    greet2: {
        fontSize: 26,
        fontFamily: 'Poppins-SemiBold',
        color: '#1a1a1a'
    },
    date: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#1a1a1a90'
    },
    section2: {
        padding: 20,
        flex: 1,

        justifyContent: 'center'
    },
    ready: {
        fontSize: 28,
        fontFamily: 'Poppins-ExtraBold',
        color: '#1a1a1a'
    },
    inst: {
        fontSize: 16,
        fontFamily: 'Poppins-Light',
        marginTop: 10,
        marginBottom: 20
    },
    mode: {
        width: windowWidth - 40,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#BD21D9',
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    modetext: {
        color: '#1a1a1a',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Poppins-Regular'
    }
})


export default connect(mapStateToProps, { setAllWorkout, setDaywiseWorkout, setNormalWorkout })(HomePage)
