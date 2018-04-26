import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import PropTypes from 'prop-types';
import Header from '../shared/Header';
import bindAll from 'lodash/bindAll';
import PrayerService from '../../util/PrayerService';

const getPrayerName = time => {
    switch(time) {
        case 'morning':
            return 'Morning Prayer';
        case 'afternoon':
            return 'Noon Prayer';
        case 'earlyEvening':
            return 'Early Evening Prayer';
        case 'closeOfDay':
            return 'Close of Day Prayer';
    }
};

export default class Prayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            prayer: ''
        };
        bindAll(this, [
            'getPrayer'
        ]);
        console.log('Here!');
        const time = props.navigation.getParam('time');
        this.getPrayer(time);
    }

    async getPrayer(time) {
        try {
            let prayer = await AsyncStorage.getItem(`prayer-${time}`);
            if(!prayer) {
                const res = await PrayerService.getDailyPrayer(time);
                prayer = res.text;
            }
            this.setState({
                ...this.state,
                prayer
            });
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        const { prayer } = this.state;
        const time = this.props.navigation.getParam('time');
        return (
            <Container>
                <Header back={true} navigation={this.props.navigation} />
                <Content style={styles.content}>
                    <Text style={styles.header}>{getPrayerName(time)}</Text>
                    <Text style={styles.text}>{prayer}</Text>
                </Content>
            </Container>
        );
    }

}
Prayer.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    content: {
        paddingTop: 30,
        paddingLeft: 30,
        paddingRight: 30
    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30
    },
    text: {
        fontFamily: 'serif',
        textAlign: 'center',
        fontSize: 18,
        lineHeight: 32
    }
});
