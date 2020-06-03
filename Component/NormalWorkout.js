import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, Image, ScrollView, Animated } from 'react-native'
import { connect } from 'react-redux'
import { setCountNormal, setNormalWorkout } from '../Redux/redux/actions/mainAction'
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const HeaderHeightMax = windowHeight / 3.5;
const HeaderHeightMin = windowHeight / 9;


class NormalWorkout extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            set_count_normal: 1,
            scrollY: new Animated.Value(0),
            isWorkingout: false,
            normal_workout_array: [],
            runningTimer: 0,
            currentlyRunning: null
        }
    }
    componentDidMount() {

        this.setState({
            set_count_normal: this.props.main.set_count_normal,
            normal_workout_array: this.props.main.normal_workout
        }, () => {
            console.log(this.state.normal_workout_array)
        })
    }




    render() {

        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, (HeaderHeightMax - HeaderHeightMin / 5)],
            outputRange: [HeaderHeightMax, HeaderHeightMin],
            extrapolate: 'clamp'
        })

        const animatedWorkoutPaddingTop = this.state.scrollY.interpolate({
            inputRange: [0, (HeaderHeightMax - HeaderHeightMin / 5)],
            outputRange: [HeaderHeightMax + 10, HeaderHeightMin + 10]
        })

        const normalOpacity = this.state.scrollY.interpolate({
            inputRange: [0, ((HeaderHeightMax - HeaderHeightMin / 5)) / 3],
            outputRange: [1, 0]
        })
        const normalOpacity2 = this.state.scrollY.interpolate({
            inputRange: [0, (HeaderHeightMax - HeaderHeightMin), ((HeaderHeightMax - HeaderHeightMin) * 1.5)],
            outputRange: [0, 0.4, 1],
            extrapolate: 'clamp'
        })
        const normalMargin2 = this.state.scrollY.interpolate({
            inputRange: [0, ((HeaderHeightMax - HeaderHeightMin))],
            outputRange: [0, 60],
            extrapolate: 'clamp'
        })


        // const SingleWorkout = this.props.normal_workout !== null ? (

        // ) : (
        //     null
        // )

        let SingleWorkout;
        if (this.state.normal_workout_array !== undefined || this.props.main.normal_workout != undefined) {
            SingleWorkout = this.state.normal_workout_array.map((workout, index) => {
                let minutes_in_string = workout.time.split(' ')[0]
                let seconds = minutes_in_string * 60

                function myTime(time) {
                    let hr = ~~(time / 3600);
                    let min = ~~((time % 3600) / 60);
                    let sec = time % 60;
                    let sec_min = "";
                    if (hr > 0) {
                        sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
                    }
                    sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
                    sec_min += "" + sec;
                    return sec_min;
                }
                return (
                    <View key={index}>
                        <View style={styles.singleWorkout}>
                            <View style={styles.imageBGContainer}>
                                <View style={styles.imageBG}>
                                    <Image source={workout.image} style={styles.workoutImage} />
                                </View>

                            </View>
                            <View style={styles.aboutWorkout}>
                                <Text style={styles.workoutName}>{workout.name}</Text>
                                <Text style={styles.workoutTime}>Time : {workout.time}</Text>
                            </View>
                            <View style={{ position: 'absolute', right: 20, bottom: 20, backgroundColor: '#59dd9c', height: 26, width: 50, borderRadius: 15, zIndex: 190, alignItems: 'center', justifyContent: 'center' }}>
                                <Text>{myTime(seconds)}</Text>
                            </View>
                        </View>

                    </View>
                )
            })
        } else {
            return null
        }


        const EditSetCountNormal = this.state.showModal ? (
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: 18 }}>Change set number</Text>

                    <RNPickerSelect

                        onValueChange={(value) => this.setState({ set_count_normal: value })}
                        items={[
                            { label: '1', value: 1, color: '#333' },
                            { label: '2', value: 2, color: '#333' },
                            { label: '3', value: 3, color: '#333' },
                            { label: '4', value: 4, color: '#333' },
                            { label: '5', value: 5, color: '#333' },
                        ]}
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#bd21d9', padding: 10, paddingLeft: 20, paddingRight: 20, borderRadius: 10, marginTop: 20 }}
                        onPress={() => {
                            this.props.setCountNormal(this.state.set_count_normal)
                            this.setState({ showModal: false })
                        }}>
                        <Text style={{ color: '#fff' }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>

        ) : (
                null
            )

        return (
            <View style={styles.main}>
                {EditSetCountNormal}
                <Animated.View

                    style={{
                        height: headerHeight,
                        backgroundColor: '#fff',
                        position: 'absolute', top: 0, left: 0, right: 0,
                        zIndex: 102,
                        paddingLeft: 20,
                        paddingRight: 20,
                        backgroundColor: '#fff',
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                    }}>
                    <FontAwesome style={styles.back} name="angle-left" size={30}
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                    <Animated.Text style={{
                        fontSize: 40,
                        fontFamily: 'Poppins-SemiBold',
                        color: '#1a1a1a',
                        lineHeight: 50,
                        opacity: normalOpacity
                    }}>Normal</Animated.Text>
                    <Animated.Text style={{
                        fontSize: 28,
                        lineHeight: 28,
                        fontFamily: 'Poppins-Light',
                        color: '#1a1a1a',
                        opacity: normalOpacity
                    }}>workout</Animated.Text>

                    <Animated.Text style={{
                        fontSize: 26,
                        fontFamily: 'Poppins-Light',
                        color: '#1a1a1a',
                        lineHeight: 35,
                        opacity: normalOpacity2,
                        marginLeft: normalMargin2,
                        position: 'absolute',
                        top: 10,
                        left: 0
                    }}>Normal workout</Animated.Text>


                </Animated.View>
                <ScrollView

                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }], { useNativeDriver: false }
                    )}
                    style={styles.section2}>
                    <Animated.View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: animatedWorkoutPaddingTop
                    }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.setText}>Set :  {this.props.main.set_count_normal}</Text>
                            {
                                this.state.isWorkingout ? (
                                    null
                                ) : (
                                        <FontAwesome name="pen" size={20} style={styles.cog} color="#333" onPress={() => this.setState({ showModal: true })} />
                                    )
                            }
                        </View>


                        {this.state.isWorkingout ? (null) : (
                            <FontAwesome
                                onPress={() => {
                                    this.props.setNormalWorkout()
                                }}
                                name="random" size={30} color="#333" />
                        )}
                    </Animated.View>
                    <View style={{ paddingBottom: 50, }}>
                        {SingleWorkout}
                    </View>


                </ScrollView>
                <View style={styles.startButton}>
                    <FontAwesome
                        name="play" size={24} color="#fff"
                        onPress={() => this.setState({ isWorkingout: true })}
                    />
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
        flex: 1,
        backgroundColor: '#f3f7ff',
    },
    back: {
        // marginBottom: 20,
        // marginTop: 10,
        width: 40,
        padding: 10,
        paddingLeft: 0,
        zIndex: 200,
        marginBottom: 30
    },


    section2: {
        flex: 1,
        padding: 20
    },
    settings: {

    },
    setText: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#1a1a1a',
        padding: 5
    },
    cog: {
        paddingLeft: 10,
        paddingBottom: 2
    },
    workoutsListSection: {
        width: 100 + '%',
    },
    modalContainer: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor: '#f3f7ff60',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        zIndex: 100,
    },
    modal: {
        height: windowHeight / 3,
        width: windowWidth - 60,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flexDirection: 'column',

    },
    singleWorkout: {
        width: 100 + '%',
        height: windowHeight / 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        marginTop: 40,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    imageBGContainer: {
        width: 35 + '%',
        height: 100 + '%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    imageBG: {
        height: 75 + '%',
        width: 75 + '%',
        borderRadius: 20,
        backgroundColor: '#f3f7ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    workoutImage: {
        height: 90 + '%',
        width: 90 + '%'
    },
    aboutWorkout: {
        width: 75 + '%',
        justifyContent: 'center',
        height: 100 + '%'
    },
    workoutName: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',

    },
    workoutTime: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular'
    },
    startButton: {
        backgroundColor: '#bd21d970',
        borderRadius: 10,
        height: 60,
        width: 60,
        position: "absolute",
        right: 20,
        bottom: 30,
        zIndex: 200,
        alignItems: 'center',
        justifyContent: 'center'
    }



})


export default connect(mapStateToProps, { setCountNormal, setNormalWorkout })(NormalWorkout)
