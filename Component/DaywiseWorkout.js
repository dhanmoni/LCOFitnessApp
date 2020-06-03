import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { setCountDaywise, setDaywiseWorkout, setNormalWorkout, reset } from '../Redux/redux/actions/mainAction'
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export class DaywiseWorkout extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            set_count_daywise: 1,
        }
    }
    componentDidMount() {

        this.setState({ set_count_daywise: this.props.main.set_count_daywise })



    }

    render() {


        const EditSetCountDaywise = this.state.showModal ? (
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={{ fontFamily: "Poppins-Regular", fontSize: 18 }}>Change set number</Text>

                    <RNPickerSelect

                        onValueChange={(value) => this.setState({ set_count_daywise: value })}
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
                            this.props.setCountDaywise(this.state.set_count_daywise)
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
                {EditSetCountDaywise}
                <View style={styles.section1}>
                    <Text style={styles.back} onPress={() => this.props.reset()}>Back</Text>
                    <Text style={styles.daywise}>Daywise</Text>
                    <Text style={styles.workout}>workout</Text>
                </View>
                <View style={styles.section2}>
                    <View style={styles.settings}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.setText}>Set : {this.props.main.set_count_daywise}</Text>
                            <FontAwesome name="pen" size={20} style={styles.cog} color="#333" onPress={() => this.setState({ showModal: true })} />
                        </View>
                    </View>
                    <View style={styles.workoutsListSection}>

                    </View>

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
        position: 'relative'
    },
    back: {
        paddingBottom: 30,
        paddingTop: 20
    },
    section1: {
        padding: 20,
        backgroundColor: '#fff',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        paddingBottom: 30
    },
    daywise: {
        fontSize: 40,
        fontFamily: 'Poppins-SemiBold',
        color: '#1a1a1a',
        lineHeight: 50
    },
    workout: {
        fontSize: 28,
        lineHeight: 28,
        fontFamily: 'Poppins-Light',
        color: '#1a1a1a'
    },
    section2: {
        flex: 1,
        padding: 20
    },
    settings: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    setText: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#1a1a1a',
        padding: 5
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
    cog: {
        paddingLeft: 10,
        paddingBottom: 2
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
})


export default connect(mapStateToProps, { setCountDaywise, setDaywiseWorkout, setNormalWorkout, reset })(DaywiseWorkout)
